import React from 'react';
import { connect } from 'react-redux';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import  { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';

const Header = ({currentUser}) => {
    return (
        <div className='header'>
            <Link to='/' className='logo-container' title='HOME'>
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link to='/shop' className='option' title='SHOP'>SHOP</Link>
                <Link to='/contact' className='option' title='CONTACT'>CONTACT</Link>
              
                {currentUser ? <div className='option' onClick={() => auth.signOut()}>SIGNOUT</div> : <Link to='/signin' className='option' title='SIGNIN'>SIGNIN</Link>}
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);