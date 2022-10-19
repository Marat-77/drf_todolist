import React, { Component } from 'react';
import './Footer.css';

const Footer = ({date}) => {
    return(
        <div className="footer">
            footer. copiright. {date}
        </div>
    )
}

export default Footer;
