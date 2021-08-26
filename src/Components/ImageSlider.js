import React,{useState} from 'react';
import { SliderData } from './SliderData';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
import '../App';

const ImageSlider = ({slides}) => {
    let [current, setCurrent] = useState(1);
    const length = slides.length;

    const nextSlide=() => {
        setCurrent(current === length ?0 : current+1);
    }

    const previousSlide = () => {
        setCurrent(current === 1 ?length : current-1);
    }

    const moveDot = (index) => {
        setCurrent(index)
    }

    return(
        <section className= "slider">
            <FaArrowAltCircleLeft className="left" onClick = {previousSlide}/>
            <FaArrowAltCircleRight className = "right" onClick ={nextSlide}/>
            {SliderData.map( (slide, index) => {
                return (
                    <div className = {index+1 === current? 'slide-active' : 'slide'}
                    key = {index}>
                      {index+1 ===current &&(  <img src = {slide.image} alt ="lake pics" className="image"/>
                        )}
                    </div>
                ); 
            })}
             <div className="container-dots">
                {Array.from({length}).map((slide, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={current === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
                </div>

        </section>
    )
}
export default ImageSlider;