import React from "react";
import Image from "../mountain-5941381_1920.jpg";
import "./Header.css";

const Header = () => {
    return (
        <div>
            <h1>My Portfolio</h1>
            <img className="image" src={Image} alt="oops"/>
        </div>
    )
}

export default Header;