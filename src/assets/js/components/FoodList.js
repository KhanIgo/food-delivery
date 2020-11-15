import React, { Fragment } from 'react'
import FoodLoop from "@components/FoodLoop";

class FoodList extends React.Component{

    render() {
        // console.log(this.props.products)
        return (
            <div className={'FoodList row'}>
                <div className={'FoodList__cnt cnt cnt_wide'}>
                    { this.props.products.map( (prod, index) => {
                        return(
                            <FoodLoop product={prod} id={prod.id} key={prod.id} />
                        )
                    }) }
                </div>
            </div>
        )
    }
}


export default FoodList