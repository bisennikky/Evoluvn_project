import React, { useState } from 'react';
import {
    FaBars,
    FaTh,
    FaHubspot,
    FaDiscourse,
    FaCog, 
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/Dashboard",
            name:"Dashboard",
            icon:<FaTh/>
        },
        
        {
            path:"/Projects",
            name:"Projects",
            icon:<FaDiscourse />
        },
        {
            path:"/Background",
            name:"Background",
            icon:<FaHubspot/>
        },
        {
            path:"/Setting",
            name:"Setting",
            icon:<FaCog/>
        }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <div style={{marginLeft: isOpen ? "50px" : "  0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;