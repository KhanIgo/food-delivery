import React, {Fragment} from 'react';

class Dough extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            ...props
        }
        this.state.isEnabled = this.state.items.length>1;
    }

    getButtonClass(index){
        let classes = ['Dough__btn', 'ui-btn', 'ui-btn-group__item']
        if( index == this.props.activeIndex){
            classes.push('is-active')
        }
        return classes.join(' ');
    }

    render(){
        return(
            <div className="Dough ui-btn-group ui-btn-group_dough">
                { this.state.items.map( (item, index)=>{
                    return(
                        <button
                            className={this.getButtonClass(index)}
                            onClick={ this.state.onSelectDough.bind( this.state.parent, index) }
                            key={index}
                            disabled={!this.state.isEnabled}
                        ><span>{item}</span></button>
                    )
                }) }
            </div>
        );
    }
}

export default Dough