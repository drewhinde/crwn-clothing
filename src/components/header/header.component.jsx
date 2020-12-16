import React from 'react';
import './header.styles.scss';
import {Link} from 'react-router-dom';
import  {ReactComponent as Logo } from '../../assets/crown.svg';

const Header = () => {
    return (
        <div className='header'>
            <Link to='/' className='logo-container' title='HOME'>
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link to='/shop' className='option' title='SHOP'>SHOP</Link>
                <Link to='/shop' className='option' title='CONTACT'>CONTACT</Link>
            </div>
        </div>
    )
}

export default Header;