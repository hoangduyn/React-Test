import { Carousel } from "antd";
import React from "react";

const CarouselHomePage = () => {
    const styledImg = {
        width: '100%',
        height:400
    }
    return(
        <>
        <Carousel autoplay={true} autoplaySpeed={2000} effect="fade" style={{marginTop: 20}}>
            <div>
                <img src="..\..\images\carousel1.jpg" alt="pic1" style={styledImg}/>
            </div>
            <div>
                <img src="..\..\images\carousel2.jpeg" alt="pic1" style={styledImg}/>
            </div>
            <div>
                <img src="..\..\images\carousel3.jpg" alt="pic1" style={styledImg}/>
            </div>
            <div>
                <img src="..\..\images\carousel4.jpg" alt="pic1" style={styledImg}/>
            </div>
        </Carousel>
        </>
    );
};

export default CarouselHomePage;