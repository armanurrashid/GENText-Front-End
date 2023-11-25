// import React from 'react';

// const Header = () => {
//     return (
//         <div>
//             <h1>Header</h1>
//         </div>
//     );
// };

// export default Header;

import React, { useState } from "react";

import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import gentextLogo from "../../Images/logo2.png";
import {
    FaUser,
    FaBell,
    FaSignOutAlt,
    // Fa-sign-out-alt

} from "react-icons/fa";
const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav>
            <div>
                <img src={gentextLogo} alt="" className="logo" />
            </div>
            <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className="HeaderUL">
                <ul className={menuOpen ? "open" : ""}>
                    <li>
                        <NavLink to="/profile"><FaUser /></NavLink>
                    </li>
                    <li>
                        <NavLink to="/notification"><FaBell /></NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact"><FaSignOutAlt /></NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;