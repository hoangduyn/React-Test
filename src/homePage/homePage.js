import React from "react";
import Category from "../routes/category/category.js";
import CarouselHomePage from "./components/carousel";

const HomePage = () => {
    return(<>
    <CarouselHomePage />
    <div>
        <Category title='new' color='#e62263' />
        <Category title='favor' color='#1bbc9b' />
        <Category title='recommend' color='#1f8ceb' />

    </div>
    </>);
};

export default HomePage