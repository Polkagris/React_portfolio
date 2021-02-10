import React from "react";
import Image from "../mountain-5941381_1920.jpg";
import "./Header.css";

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <img className="image" src={Image} alt="oops"/>
        </div>
    )
}

export default Header;