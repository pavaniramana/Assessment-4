import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './AppStyling.css'

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <Link to='/Home' className='home-header'>Home</Link>
                <Link to='/Student' className='home-student'>Student</Link>
                <Link to='/contact' className='home-contact'>Contact</Link>
            </div>
        )
    }
}
export default Header;

