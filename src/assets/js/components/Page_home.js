import React from 'react'
import FoodList from "@components/FoodList"
import Data from './../Data.js';
import Slider from '@components/Slider';
import Categories from '@components/Categories';

const Page_home = ()=>{
    return (
        <div className="Page_home">
            <Slider />
            <Categories />
            <FoodList products={Data.products} category={Data.category} />
        </div>
    )
}

export default Page_home