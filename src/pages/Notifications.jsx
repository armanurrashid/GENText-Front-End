import React from 'react';
import { FaTimes, } from "react-icons/fa";
import './Notifications.css';
const Analytics = () => {
    return (
        <div className="NotificationMain" class="ms-5">
           <div className="singleNotification row px-5 py-3 d-flex my-3 bg-secondary">
                <div className="textDiv col-10">
                    hello
                </div>
                <div className="iconDiv px-5 col-2">
                    <FaTimes />
                </div>
            </div>
            <div className="singleNotification row px-5 py-3 d-flex my-3 bg-secondary">
                <div className="textDiv col-10">
                    hello
                </div>
                <div className="iconDiv px-5 col-2">
                    <FaTimes />
                </div>
            </div>
            <div className="singleNotification row px-5 py-3 d-flex my-3 bg-secondary">
                <div className="textDiv col-10">
                    hello
                </div>
                <div className="iconDiv px-5 col-2">
                    <FaTimes />
                </div>
            </div>
            <div className="singleNotification row px-5 py-3 d-flex my-3 bg-secondary">
                <div className="textDiv col-10">
                    hello
                </div>
                <div className="iconDiv px-5 col-2">
                    <FaTimes />
                </div>
            </div>
            <div className="singleNotification row px-5 py-3 d-flex my-3 bg-secondary">
                <div className="textDiv col-10">
                    hello
                </div>
                <div className="iconDiv px-5 col-2">
                    <FaTimes />
                </div>
            </div>
        </div>
    );
};

export default Analytics;