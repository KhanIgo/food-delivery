import React, {Fragment} from 'react'

class Variations extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ...props
        }
    }
    getButtonClass(index){
        let classes = ['Variations__btn', 'ui-btn', 'ui-btn-group__item']
        if( index == this.props.activeIndex){
            classes.push('is-active')
        }
        return classes.join(' ');
    }

    render(){
        return(
            <Fragment>
                <div className="Variations ui-btn-group ui-btn-group_variations">
                    { this.state.items.map((item, index)=>{
                        return(
                            <button
                                className={ this.getButtonClass(index) }
                                onClick={ this.state.onSelectSize.bind(this.state.parent, index) }
                                key={index}
                            >
                                <span>{item.diam}</span>
                                <span>{item.weight}</span>
                                <span>{item.price}</span>
                            </button>
                        );
                    }) }
                </div>
            </Fragment>
        )
    }
}

export default Variations
