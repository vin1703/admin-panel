import React, { useState } from 'react';
import './sidebar.css';
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
} from "@material-ui/icons";
import {Link} from "react-router-dom"

function Sidebar() {
    const [activeItem, setActiveItem] = useState("Home");

    // Function to handle clicks on list items
    const handleItemClick = (itemName) => {
        setActiveItem(itemName);
    };

    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to='/home' className='link'>
                        <li className={`sidebarListItem ${activeItem === "Home" ? "active" : ""}`} onClick={() => handleItemClick("Home")}>
                            <LineStyle className="sidebarIcon" />
                            Home
                        </li>
                        </Link>
                        <li className={`sidebarListItem ${activeItem === "Analytics" ? "active" : ""}`} onClick={() => handleItemClick("Analytics")}>
                            <Timeline className="sidebarIcon" />
                            Analytics
                        </li>
                        <li className={`sidebarListItem ${activeItem === "Sales" ? "active" : ""}`} onClick={() => handleItemClick("Sales")}>
                            <TrendingUp className="sidebarIcon" />
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <Link to='/users' className='link'>
                            <li className={`sidebarListItem ${activeItem === "Users" ? "active" : ""}`} onClick={() => handleItemClick("Users")}>
                                <PermIdentity className="sidebarIcon" />
                                Users
                            </li>
                        </Link>
                        <Link to='/products' className='link'>
                            <li className={`sidebarListItem ${activeItem === "Products" ? "active" : ""}`} onClick={() => handleItemClick("Products")}>
                                <Storefront className="sidebarIcon" />
                                Products
                            </li>
                        </Link>

                        <li className={`sidebarListItem ${activeItem === "Transactions" ? "active" : ""}`} onClick={() => handleItemClick("Transactions")}>
                            <AttachMoney className="sidebarIcon" />
                            Transactions
                        </li>
                        <li className={`sidebarListItem ${activeItem === "Reports" ? "active" : ""}`} onClick={() => handleItemClick("Reports")}>
                            <BarChart className="sidebarIcon" />
                            Reports
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className={`sidebarListItem ${activeItem === "Mail" ? "active" : ""}`} onClick={() => handleItemClick("Mail")}>
                            <MailOutline className="sidebarIcon" />
                            Mail
                        </li>
                        <li className={`sidebarListItem ${activeItem === "Feedback" ? "active" : ""}`} onClick={() => handleItemClick("Feedback")}>
                            <DynamicFeed className="sidebarIcon" />
                            Feedback
                        </li>
                        <li className={`sidebarListItem ${activeItem === "Messages" ? "active" : ""}`} onClick={() => handleItemClick("Messages")}>
                            <ChatBubbleOutline className="sidebarIcon" />
                            Messages
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className={`sidebarListItem ${activeItem === "Manage" ? "active" : ""}`} onClick={() => handleItemClick("Manage")}>
                            <WorkOutline className="sidebarIcon" />
                            Manage
                        </li>
                        <li className={`sidebarListItem ${activeItem === "StaffAnalytics" ? "active" : ""}`} onClick={() => handleItemClick("StaffAnalytics")}>
                            <Timeline className="sidebarIcon" />
                            Analytics
                        </li>
                        <li className={`sidebarListItem ${activeItem === "StaffReports" ? "active" : ""}`} onClick={() => handleItemClick("StaffReports")}>
                            <Report className="sidebarIcon" />
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
