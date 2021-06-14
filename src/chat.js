import { Avatar, IconButton } from "@material-ui/core";
import React from "react";
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import "./chat.css";

import MicIcon from '@material-ui/icons/Mic';


function Chat({ messages }){
    return(
        <div className="chat">   
         <div className="chat_header">
             <Avatar/>
             <div className="chat_headerinfo">
                 <h3>Room Name</h3>
                 <p>last seen at...</p>
             </div>
             <div className="chat_headerright">
                 <IconButton>
                  <SearchOutlinedIcon/>
                 </IconButton>
                 <IconButton>
                     <AttachFileIcon/>
                     </IconButton>
                     <IconButton>
                     <MoreVertIcon/>
                     </IconButton>
             </div>
         </div>
        <div className="chat_body">
               { messages.map((message) => {
                <p className={`chat_message ${message.received && "chat_receiver"}`}>
            <span className="chat_name">
                {message.name}
            </span>
            <span className="chat_timestamp">
                {message.timestamp}
            </span>
            
            </p>
               }  )}
               
            
        </div>
        <div className="chat_footer">
        
       <InsertEmoticonIcon/>
       <form>
           <input  placeholder="type message" type="text" />
           <button  type="submit">Send a message</button> 
    
                  </form>
          <MicIcon/>
        </div>
        </div>
    );
}
export default Chat;