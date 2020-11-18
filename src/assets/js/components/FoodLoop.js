import React from 'react'
// import PropTypes from 'prop-types'
import { first, chunk, compact, set } from 'lodash'
import ReactHtmlParser from 'react-html-parser'
import PriceWeight from './PriceWeight';
import Variations from "@components/Variations";
import Dough from "@components/Dough";
import QtyControl from "@components/QtyControl";

class FoodLoop extends React.Component{
    constructor(props) {
        super(props)

        let qty = 1;
        let minQty = 1;
        let maxQty = 10;
        let sizeIndex = 0;
        let doughIndex = 0;
        let images = Object.values(this.props.product.images);
        let image = 'http://127.0.0.1:8000/images/prods/' + first( images );
        let price
        if(this.props.product.price){
            price = this.props.product.price
        }
        else{
            price = this.props.product.variations[0].price;
        }
        
        this.state = {
            ...this.props.product,
            price, doughIndex, sizeIndex, image, images, qty, minQty, maxQty
        };

        let  variations = this.getVariations(doughIndex);
        this.state.variations = variations;
        
        let weight = this.getWeight();
        this.state.weight = weight;

    }

    selectSizeHandler(index) {
        this.setState({
            sizeIndex: index,
            price: this.state.variations[index].price
        });
        this.setState({ weight: this.getWeight(index, this.state.doughIndex)  });

        
    }
    selectDoughHandler(index) {
        this.setState({
            doughIndex: index
        });
        
        this.setState({ variations: this.getVariations( index ) });
        this.setState({ weight: this.getWeight(this.state.sizeIndex, index) });
    }
    getVariations(doughIndex=0){
        let res;
        let res2;
        
        if( this.props.product.testo.length > 1){
            let qty = this.props.product.variations.length/2;
            res = chunk(this.props.product.variations, qty)[doughIndex];
        } 
        else res = this.props.product.variations;        
        return compact( res.map( (item)=>{
            if(item.price !=0 ){ return item }
        }))
    }
    getWeight(vIndex=0, dIndex=0){
        let variations = this.getVariations(dIndex);
        let item = variations[vIndex]
        return item.weight;
    }


    toCartHandler(id){
        this.setState({ username: 'rstacruz' })
    }


    

    render(){
        return(

            <div className={'FoodLoop'}>
                <div className={'FoodLoop__inner'}>
                    <div className={"FoodLoop__img-wrpr"}>
                        <img src={ this.state.image } alt="" className={"FoodLoop__img"} />
                    </div>
                    <div className={"FoodLoop__title"}>
                        <h3>{ this.state.title }</h3>
                        <sub>ID: {this.state.id}</sub>
                    </div>
                    <div className={"FoodLoop__desc"}>
                        { ReactHtmlParser(this.state.desc) }
                    </div>
                    {this.state.nutritional ?
                        <div className={"FoodLoop__nutritional"}>
                            {ReactHtmlParser(this.state.nutritional)}
                        </div>
                        : ''
                    }
                    
                    <div className={"FoodLoop__gough-and-variations"}>
                    {
                        this.state.testo.length ?
                            <div className={"FoodLoop__gough"}>
                                <Dough
                                    activeIndex={this.state.doughIndex}
                                    items={this.state.testo}
                                    onSelectDough={this.selectDoughHandler}
                                    parent={this}
                                />
                            </div>
                            :''
                    }

                    {this.state.variations ?
                        <div className={"FoodLoop__sizes"}>
                            <Variations
                                items={this.state.variations}
                                activeIndex={this.state.sizeIndex}
                                onSelectSize={this.selectSizeHandler}
                                parent={this} />
                        </div>
                        : ''
                    }
                    </div>
                    <div className={"FoodLoop__qty-price-weight"}>
                        <div className={"FoodLoop__qty-cart-btn"}>
                            <QtyControl
                                qty={ this.state.qty }
                                min={ this.state.minQty }
                                max={ this.state.maxQty }
                                parent={this}
                            />
                        </div>
                        <div className={"FoodLoop__price-weight"}>
                            <PriceWeight price={this.state.price} weight={this.state.weight}  />
                        </div>
                    </div>


                    <div className={"FoodLoop__to-fav-to-cart"}>
                        <div className={"FoodLoop__to-fav"}>
                            <button
                                className={'ui-btn ui-btn_round ui-btn_fav FoodLoop__fav-btn'}>
                                <i className="ui-icon ui-icon_fav"></i>
                            </button>
                        </div>
                        <div className={"FoodLoop__to-cart"}>
                            <button
                                className={'ui-btn ui-btn_blue FoodLoop__cart-btn'}
                                onClick={this.toCartHandler.bind(this, this.props.id)}>
                                    <span>В корзину</span>
                                    <i className="ui-icon ui-icon_cart"></i>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        );
    }


    componentWillMount(){}
    componentDidMount(){}
}

// FoodLoop.propTypes = {
//     foog: PropTypes.object.isRequired,
//     id: PropTypes.number.isRequired
// }

export default FoodLoop