import '../styles/Banner.css';
import logo from "../assets/logo.png";
import React from 'react';

const Banner = () =>{
    const title = 'La maison jungle'
    return(
        <div className='lmj-banner'>
            <img alt="la maison jungle" src={logo} className='lmj-logo'/>
			<h1 className='lmj-title'>{title}</h1>
        </div>
    )
}

export default Banner;
