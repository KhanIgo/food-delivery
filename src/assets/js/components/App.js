import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import CartList from "@components/CartList"
import CartForm from "@components/CartForm"
import FoodList from "@components/FoodList"
import Data from './../Data.js';

class App extends React.Component{
    render() {
        // console.log('Data.products', Data.products);
        return (
            <Fragment>
                {/*<CartList />*/}
                {/*<CartForm />*/}
                <h1>App Component</h1>
                <FoodList products={Data.products} category={Data.category} />
            </Fragment>
        )
    }

}

export default App
