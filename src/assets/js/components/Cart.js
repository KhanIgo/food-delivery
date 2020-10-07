import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import CartList from "@components/CartList"
import CartForm from "@components/CartForm"

function Cart() {
    return (
        <Fragment>
            <CartList />
            <CartForm />
        </Fragment>
    )
}

export default Cart
