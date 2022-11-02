import React, { useCallback, useEffect, useState } from 'react';
import './ImageSliderStyles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleChevronLeft,
    faCircleChevronRight,
    faCircleXmark,
} from '@fortawesome/free-solid-svg-icons';
import { ImageData } from './ImageSliderData';

export default function ImageGallery() {
    const ImageGallery = ImageData;

    const [slideNumber, setSlideNumber] = useState(0);
    const [openModal, setOpenModal] = useState(false);
    const [autoPlay, setAutoPlay] = useState(true);
    const [timeOut, setSliderTimeout] = useState(3500);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    const minSwipeDistance = 20;

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const prevSlide = useCallback(() => {
        slideNumber === 0
            ? setSlideNumber(ImageGallery.length - 1)
            : setSlideNumber(slideNumber - 1);
    }, [slideNumber, ImageGallery.length]);

    const nextSlide = useCallback(() => {
        if (slideNumber === ImageGallery.length - 1) {
            setSlideNumber(0);
        } else {
            setSlideNumber(slideNumber + 1);
        }
    }, [slideNumber, ImageGallery.length]);

    const createTimeOut = () => {
        clearTimeout(timeOut);
        autoPlay &&
            setSliderTimeout(
                setTimeout(() => {
                    nextSlide();
                }, 3500)
            );
    };

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

    useEffect(createTimeOut, [slideNumber, autoPlay, nextSlide]);
    useEffect(() => {
        if (openModal) {
            setAutoPlay(false);
            clearTimeout(timeOut);
        } else {
            setAutoPlay(true);
        }
    }, [setAutoPlay, openModal, timeOut]);

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
                        />
                    </div>
                    <div
                        className="fullScreenImage"
                        onClick={handleCloseModal}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        <img src={ImageGallery[slideNumber].img} alt="" />
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
                    setAutoPlay(false);
                    clearTimeout(timeOut);
                }}
                onMouseLeave={() => {
                    clearTimeout(timeOut);
                    setAutoPlay(true);
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
                {ImageGallery &&
                    ImageGallery.map((slide, index) => {
                        return (
                            <>
                                <div
                                    className="single"
                                    key={index}
                                    onClick={() => {
                                        handleOpenModal(index);
                                        setAutoPlay(false);
                                        clearTimeout(timeOut);
                                    }}
                                    onTouchStart={handleTouchStart}
                                    onTouchMove={handleTouchMove}
                                    onTouchEnd={handleTouchEnd}
                                >
                                    <img
                                        key={slide.alt}
                                        src={slide.img}
                                        alt=""
                                        className={
                                            slideNumber === index
                                                ? 'active'
                                                : ''
                                        }
                                    />
                                </div>
                            </>
                        );
                    })}
                <div className="dots">
                    {ImageGallery.map((value, index) => {
                        return (
                            <div
                                key={index}
                                className={
                                    index === slideNumber ? 'active dot' : 'dot'
                                }
                            ></div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
