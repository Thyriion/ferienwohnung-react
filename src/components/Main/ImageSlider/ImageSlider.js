import React, { useEffect, useState, useCallback } from 'react';
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
    const [timeOut, setSliderTimeout] = useState(2500);

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const prevSlide = () => {
        slideNumber === 0
            ? setSlideNumber(ImageGallery.length - 1)
            : setSlideNumber(slideNumber - 1);
    };

    const nextSlide = useCallback(() => {
        slideNumber + 1 === ImageGallery.length
            ? setSlideNumber(0)
            : setSlideNumber(slideNumber + 1);
    }, [slideNumber, ImageGallery.length]);

    const createTimeOut = () => {
        autoPlay &&
            setSliderTimeout(
                setTimeout(() => {
                    nextSlide();
                }, 2500)
            );
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
                    <div className="fullScreenImage" onClick={handleCloseModal}>
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
                className='galleryWrap'
                onMouseEnter={() => {
                    setAutoPlay(false);
                    clearTimeout(timeOut);
                }}
                onMouseLeave={() => {
                    clearTimeout(timeOut);
                    setAutoPlay(true);
                }}>
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
                            <div
                                className="single"
                                key={index}
                                onClick={() => {
                                    handleOpenModal(index);
                                    setAutoPlay(false);
                                    clearTimeout(timeOut);
                                }}>
                                <img
                                    src={slide.img}
                                    alt=""
                                    className={
                                        slideNumber === index ? 'active' : ''
                                    }
                                />
                            </div>
                        );
                    })}
            </div>
        </>
    );
}
