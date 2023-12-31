/* eslint-disable react/prop-types */
import Slider from "react-slick";
import "./carousel.css";

function Carousel({ children }) {

    const settings = {
        dots: true,
        infinite: false,
        speed: 300,
        centerMode: true,
        variableWidth: true,
        adaptiveHeight: true,
        //slidesToShow: 5,
        slidesToScroll: 1,
    };


    return (
        <div>
            <Slider {...settings}>
                {children}
            </Slider>
        </div>
    );
}

export default Carousel;