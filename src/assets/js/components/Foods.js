import React from 'react'
import FoodFilters from "@components/FoodFilters";
import FoodList from "@components/FoodList";

function Foods() {

    return(
        <div>
            <FoodFilters />
            <FoodList />
        </div>
    )
}

export default Foods