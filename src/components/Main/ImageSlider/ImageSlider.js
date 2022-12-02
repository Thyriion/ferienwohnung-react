import React, {
    useCallback,
    useEffect,
    useRef,
    useState,
    useContext,
} from 'react';
import './ImageSliderStyles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleChevronLeft,
    faCircleChevronRight,
    faCircleXmark,
} from '@fortawesome/free-solid-svg-icons';
import SupabaseContext from '../../../context/supabase/SupabaseContext';
import { getImageData } from '../../../context/supabase/SupabaseActions';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

export default function ImageSlider() {
    const { images, loading, dispatch } = useContext(SupabaseContext);

    const [slideNumber, setSlideNumber] = useState(0);
    const [autoPlay, setAutoPlay] = useState(true);
    const [openModal, setOpenModal] = useState(false);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    useEffect(() => {
        dispatch({ type: 'SET_LOADING' });
        const setImages = async () => {
            const data = await getImageData();
            dispatch({ type: 'GET_IMAGES', payload: data });
        };
        setImages();
    }, []);

    const autoPlayRef = useRef();
    const minSwipeDistance = 20;

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const prevSlide = useCallback(() => {
        slideNumber === 0
            ? setSlideNumber(images.length - 1)
            : setSlideNumber(slideNumber - 1);
    }, [slideNumber, images.length]);

    const nextSlide = useCallback(() => {
        if (slideNumber === images.length - 1) {
            setSlideNumber(0);
        } else {
            setSlideNumber(slideNumber + 1);
        }
    }, [slideNumber, images.length]);

    const handleTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) {
            return;
        }

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < minSwipeDistance;

        if (isLeftSwipe) {
            nextSlide();
        }

        if (isRightSwipe) {
            prevSlide();
        }
    };

    useEffect(() => {
        if (autoPlay && !openModal) {
            autoPlayRef.current = nextSlide;
            const play = () => {
                autoPlayRef.current();
            };

            const interval = setInterval(play, 3500);
            return () => clearInterval(interval);
        }
    });

    if (loading) {
        return <LoadingSpinner />;
    } else {
        return (
            <>
                {openModal && (
                    <div className="sliderWrap">
                        <div className="btnPrevContainer" onClick={prevSlide}>
                            <FontAwesomeIcon
                                icon={faCircleChevronLeft}
                                className="btnPrev"
                            />
                        </div>
                        <div className="btnNextContainer" onClick={nextSlide}>
                            <FontAwesomeIcon
                                icon={faCircleChevronRight}
                                className="btnNext"
                                key="btnNextIcon"
                            />
                        </div>
                        <div
                            className="fullScreenImage"
                            onClick={handleCloseModal}
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                            key="fullScreenImage"
                        >
                            <img
                                src={images[slideNumber].img}
                                alt={images[slideNumber].alt}
                                className="active"
                            />
                            <div className="btnCloseContainer">
                                <FontAwesomeIcon
                                    icon={faCircleXmark}
                                    className="btnClose"
                                    onClick={handleCloseModal}
                                />
                            </div>
                        </div>
                    </div>
                )}

                <div
                    className="galleryWrap"
                    onMouseEnter={() => {
                        setAutoPlay((prevState) => {
                            return false;
                        });
                    }}
                    onMouseLeave={() => {
                        setAutoPlay((prevState) => {
                            return true;
                        });
                    }}
                >
                    <div className="btnPrevContainer" onClick={prevSlide}>
                        <FontAwesomeIcon
                            icon={faCircleChevronLeft}
                            className="btnPrev"
                        />
                    </div>
                    <div className="btnNextContainer" onClick={nextSlide}>
                        <FontAwesomeIcon
                            icon={faCircleChevronRight}
                            className="btnNext"
                        />
                    </div>
                    {images &&
                        images.map((slide, index) => {
                            return (
                                <div
                                    className="single"
                                    key={index}
                                    onClick={handleOpenModal}
                                    onTouchStart={handleTouchStart}
                                    onTouchMove={handleTouchMove}
                                    onTouchEnd={handleTouchEnd}
                                >
                                    <img
                                        src={slide.img}
                                        alt=""
                                        className={
                                            slideNumber === index
                                                ? 'active'
                                                : ''
                                        }
                                    />
                                </div>
                            );
                        })}
                    <Dots
                        ImageGalleryLength={images.length}
                        SlideNumber={slideNumber}
                        setSlideNumber={setSlideNumber}
                    />
                </div>
            </>
        );
    }
}

function Dots({ ImageGalleryLength, SlideNumber, setSlideNumber }) {
    let dotDivs = [];
    for (let i = 0; i < ImageGalleryLength; i++) {
        dotDivs.push(
            <div
                key={i}
                onClick={() => setSlideNumber(i)}
                className={i === SlideNumber ? 'active dot' : 'dot'}
            ></div>
        );
    }
    return <div className="dots">{dotDivs}</div>;
}
