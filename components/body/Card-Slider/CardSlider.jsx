import React, { useState } from 'react'
import BtnSlider from './BtnSlider'
import dataSlider from './dataSlider'


export default function CardSlider() {
    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if (slideIndex !== dataSlider.length) {
            setSlideIndex(slideIndex + 1)
        }
        else if (slideIndex === dataSlider.length) {
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1) {
            setSlideIndex(dataSlider.length)
        }
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <>
            <div className="container-slider">
                {dataSlider.map((obj, index) => {
                    return (
                        <div
                            key={obj.id}
                            className={`${slideIndex === index + 1 ? `slide active-anim` : "slide"} flex flex-col justify-center items-start bg-cover w-3/4`}
                            style={{ backgroundImage: `url(${obj.url})` }}
                        >
                            <div className='w-3/4 pl-20 lg:pl-52 flex flex-col'>
                                <h2 className={` text-[40px] text-white font-bold leading-[40px] py-2 text-left`}>
                                    {obj.title}
                                </h2>
                                <span className=' text-xl text-white font-normal leading-6 py-6' >
                                    {obj.subTitle}
                                </span>
                                <button type="submit" href="/" className=' border-2 bg-[#FAA500] border-[#FAA500] text-white rounded-md w-28 h-9 hover:bg-white'>
                                    <span className='text-md text-white hover:text-[#faa500]'>Conferir</span>
                                </button>
                            </div>
                        </div>
                    )
                })}
                <BtnSlider moveSlide={nextSlide} direction={"next"} />
                <BtnSlider moveSlide={prevSlide} direction={"prev"} />

                <div className="container-dots">
                    {Array.from({ length: 5 }).map((item, index) => (
                        <div
                            onClick={() => moveDot(index + 1)}
                            className={slideIndex === index + 1 ? "dot active" : "dot"}
                        ></div>
                    ))}
                </div>
            </div>
        </>
    )
}