import React from "react";
import "./Footer.css";

const Footer = (props) => {
    return (
        <div className="footer" style={{"background-color": props.color}}>
            <h1>Footer</h1>
        </div>
    )
}

export default Footer;