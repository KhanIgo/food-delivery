import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import CartList from "@components/CartList"
import CartForm from "@components/CartForm"
import Header from './Header';
import Page_home from './Page_home';


class App extends React.Component{
    render() {
        // console.log('Data.products', Data.products);
        return (
            <Fragment>
                <Header />
                <Page_home />
            </Fragment>
        )
    }

}

export default App
