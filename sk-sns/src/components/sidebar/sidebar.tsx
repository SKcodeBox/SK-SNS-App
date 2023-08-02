import React from 'react';
import "./sidebar.scss";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import SidebarChannel from './sidebarChannel';

const sidebar = () => {
  return (
  <div className='sidebar'>

    <div className='sidebarLeft'>
        <div className='serverIcon'>
            <img src="./logo192.png" alt="" />
        </div>
        <div className='serverIcon'>
            <img src="./logo192.png" alt="" />
        </div>
    </div>

    <div className='sidebarRight'>
        <div className='sidebarTop'>
            <h3>SK SNS App</h3>
            <ExpandMoreIcon/>
        </div>

        <div className='sidebarChannels'>
            <div className='sidebarChannelsHeader'>
                <div className='sidebarHeader'>
                    <h4>チャンネル</h4>
                    <ExpandMoreIcon/>
                    </div>
                    <AddIcon className='sidebarAddIcon'/>
                </div>
                <div className='sidebarChannelsList'>
                        <SidebarChannel/>
                        <SidebarChannel/>
                    </div>
            </div>
        </div>
    </div>
  );
};

export default sidebar; 
