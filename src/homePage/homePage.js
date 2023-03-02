import React from "react";
import Product from "../components/product";
import CarouselHomePage from "./components/carousel";

const HomePage = () => {
    return(<>
    <CarouselHomePage />
    <div>
    <Product name='Lan tím' price={60000} rating={4.5} img='..\images\carousel1.jpg' />
    <Product name='Lan tím' price={60000} rating={4.5} img='..\images\carousel1.jpg' />
    <Product name='Lan tím' price={60000} rating={4.5} img='..\images\carousel1.jpg' />
    <Product name='Lan tím' price={60000} rating={4.5} img='..\images\carousel1.jpg' />
    <Product name='Lan tím' price={60000} rating={4.5} img='..\images\carousel1.jpg' />
    </div>
    </>);
};

export default HomePage