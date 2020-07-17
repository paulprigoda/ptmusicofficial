import React from 'react';
import './footer.css';

function Footer(props){
    return (
        <footer>
            <h3>Contact</h3>
            <p>Email: <strong>{props.emailaddress}</strong></p>
        </footer>
    )
};

export default Footer;