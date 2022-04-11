import React from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/main.css"

const Header: React.FC <any> = () => {
    return (
        <div className='head-bg'>
            <NavLink to ="/"><img className='logo' src={require('../assets/image/blue-monster-happy-icon.png')} alt=""/></NavLink>
            
            <NavLink className="link" to = "/" >Home</NavLink>
            <NavLink className="link" to = "/wallet" >Wallet</NavLink>
            <NavLink className="link" to = "/settings" >Settings</NavLink>
            
        </div>
    )
}

export  default Header;