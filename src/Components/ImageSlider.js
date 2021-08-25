import React,{useState} from 'react';
import { SliderData } from './SliderData';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';

const ImageSlider = ({slides}) => {
    let [current, setCurrent] = useState(0);
    const length = slides.length;
    return(
        <section className= "slider">
            <FaArrowAltCircleLeft className="left" />
            <FaArrowAltCircleRight className = "right" />
            {SliderData.map( (slide, index) => {
                return <img src = {slide.image} alt ="lake pics"/>;
            })}

        </section>
    )
}
export default ImageSlider;