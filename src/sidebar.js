import React from 'react';
import "./sidebar.css";
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { Avatar,IconButton } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import SidebarChat from './sidebarchat';

function Sidebar(){
    return(
        <div className="sidebar">
        
         <div className="sidebar_header">
         <Avatar src="p1.jpg"/>
              <div className="sidebar_headerright">
            <IconButton>
            <DonutLargeIcon />
            </IconButton>
               <IconButton>
                   <ChatIcon />
               </IconButton>
               <IconButton>
                   <MoreVertIcon />
               </IconButton>
              </div>
         </div>
          <div className="sideabar_search">
          <div className="sidebar_search_container">
            <SearchOutlinedIcon />
            <input placeholder="search or start new chat" type="text" />
          </div>
         
            </div>
            <div className="sidebar_chats">
                <SidebarChat/> 
                <SidebarChat/> 
                <SidebarChat/> 
                
                
                          </div>

        </div>
    );
}
export default Sidebar;