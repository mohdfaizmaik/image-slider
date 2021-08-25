import React,{useState} from 'react';
import { SliderData } from './SliderData';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';

const ImageSlider = ({slides}) => {
    let [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide=() => {
        setCurrent(current === length-1?0 : current+1);
    }

    const previousSlide = () => {
        setCurrent(current === 0?length-1 : current+1);
    }

    return(
        <section className= "slider">
            <FaArrowAltCircleLeft className="left" onClick = {previousSlide}/>
            <FaArrowAltCircleRight className = "right" onClick ={nextSlide}/>
            {SliderData.map( (slide, index) => {
                return <img src = {slide.image} alt ="lake pics" className="image"/>;
            })}

        </section>
    )
}
export default ImageSlider;