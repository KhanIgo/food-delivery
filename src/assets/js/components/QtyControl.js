import React from 'react'

class QtyControl extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            ...props
        }
    }

    changeQty(event) {
        this.setState({
            qty: event.target.value
        });
    }
    qtyBtnHandler( action){
        let newQty;
        if( action == '+'){ newQty = this.state.qty+1; }
        else if( action == '-'){ newQty = this.state.qty-1; }
        if(newQty < this.state.min || newQty > this.state.max ){ return }
        console.log('newQty', newQty);
        this.setState({
            qty: newQty
        });
    }

    render(){
        return(
            <div className='QtyControl'>
                <button
                    className='ui-btn ui-btn_qty ui-btn_qty-decr QtyControl__btn QtyControl__btn_decrement'
                    onClick={ this.qtyBtnHandler.bind(this, '-') }
                >-</button>
                <input
                    className='QtyControl__input ui-input ui-input_no-border'
                    type="text"
                    value={this.state.qty}
                    onChange={ this.changeQty.bind(this) }
                />
                <button
                    className='ui-btn ui-btn_qty ui-btn_qty-incr QtyControl__btn QtyControl__btn_increment'
                    onClick={ this.qtyBtnHandler.bind(this, '+') }
                >+</button>
            </div>
        )
    }
}

export default QtyControl