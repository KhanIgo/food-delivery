import React, {Component, Fragment} from 'react';

class PriceWeight extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Fragment>
                <div className={"FoodLoop__price"}>{ this.props.price }</div>
                <div className={"FoodLoop__weight"}>{ this.props.weight }</div>
            </Fragment>
        );
    }
}

export default PriceWeight;