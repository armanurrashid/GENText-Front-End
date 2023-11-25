import React, { useState } from 'react';
import {
    FaTh,
    FaUpload,
    FaHistory,
    FaBars,
    FaUser,
    FaBell,
    FaTimes,
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "/",
            name: "Dashboard",
            icon: <FaTh />
        },
        {
            path: "/upload",
            name: "Upload",
            icon: <FaUpload />
        },
        {
            path: "/history",
            name: "History",
            icon: <FaHistory />
        },
        {
            path: "/notifications",
            name: "Notifications",
            icon: <FaBell />
        },
        {
            path: "/profile",
            name: "Profile",
            icon: <FaUser />
        },
    ]
    return (
        <div className="container">
            <div style={{ width: isOpen ? "250px" : "50px" }} className="sidebar">
                <div className="top_section">
                    <div style={{ marginLeft: isOpen ? "80%" : "0px" }} className="bars">
                        {isOpen ? (<FaTimes onClick={toggle} />) : (<FaBars onClick={toggle} />)}
                    </div>
                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link" activeclassName="activeSide" >
                            <div className="icon">{item.icon}</div>
                            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;