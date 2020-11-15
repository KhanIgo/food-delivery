import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import HeaderSearch from '@components/HeaderSearch';
import HeaderUser from '@components/HeaderUser';
import HeaderLogo from '@components/HeaderLogo';
import HeaderNav from '@components/HeaderNav';
import HeaderPhones from '@components/HeaderPhones';


const Header = (props) => {
    console.log('props', props);



    return(
        <div className="Header">
            <HeaderLogo />
            <HeaderNav />
            <HeaderPhones />
            <HeaderSearch />
            <HeaderUser />
        </div>
    )
}

export default Header
