import React from "react";
import "./Navbar.css";

const Navbar = (props) => {
    console.log("color:", props.color);
    return (
        <div className="navbar" style={{"background-color": props.color}}>
            <h2 className="navText">Navbar</h2>
            <h2 className="navText">Portfolio</h2>
        </div>
    )
}

export default Navbar;