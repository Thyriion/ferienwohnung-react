import React, { useState } from 'react';
import './ImageGallery.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleChevronLeft,
    faCircleChevronRight,
    faCircleXmark,
} from '@fortawesome/free-solid-svg-icons';

export default function ImageGallery() {
    const ImageGallery = [
        {
            img: 'https://images.unsplash.com/photo-1666468426668-917784a15335?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        },
        {
            img: 'https://images.unsplash.com/photo-1666468426668-917784a15335?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80https://images.unsplash.com/photo-1666834744271-af5ef132a179?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        },
        {
            img: 'https://images.unsplash.com/photo-1666639577881-d04201a4545a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80',
        },
        {
            img: 'https://images.unsplash.com/photo-1666668321985-105042873ddc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        },
        {
            img: 'https://images.unsplash.com/photo-1656836678116-c6766b8b3d8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        },
        {
            img: 'https://images.unsplash.com/photo-1666844550308-9b47df48af49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        },
        {
            img: 'https://images.unsplash.com/photo-1666837147745-1c9dea9908a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
        },
        {
            img: 'https://images.unsplash.com/photo-1666625628272-a1071f6f7173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
        },
        {
            img: 'https://images.unsplash.com/photo-1651525763614-bbdf80ba2a35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        },
        {
            img: 'https://images.unsplash.com/photo-1652939056174-615553a7bf76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        },
    ];

    const [slideNumber, setSlideNumber] = useState(0);
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = (index) => {
        setSlideNumber(index);
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

    const nextSlide = () => {
        slideNumber + 1 === ImageGallery.length
            ? setSlideNumber(0)
            : setSlideNumber(slideNumber + 1);
    };

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

            <div className={openModal ? 'galleryWrap hidden' : 'galleryWrap'}>
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
                                onClick={() => handleOpenModal(index)}>
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
