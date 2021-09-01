import React,{useState} from 'react';
import { SliderData } from './SliderData';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';


const ImageSlider = ({slides}) => {
    let [current, setCurrent] = useState(1);
    const length = slides.length;
    const delay = 2500;
    const timeoutRef = React.useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        }
    }

    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = 
        setTimeout( () =>
            setCurrent((current) =>
            current === length    ? 1 : current+ 1
            ),
        delay
        );

        return () => {
        resetTimeout();
        };
    }, [current]);

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
                {SliderData.map((slide, index) => (
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