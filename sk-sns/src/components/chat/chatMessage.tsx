import React from 'react';
import "./chatMessage.scss";
import AccountBoxIcon from '@mui/icons-material/AccountBox';

function chatMessage() {
  return (
    <div className='message'>
        <AccountBoxIcon/>
        <div className='messageInfo'>
            <h4>
                ユーザー
                <span className='messageTimestamp'>投稿日</span>
            </h4>
            メッセージ内容
        </div>
    </div>
  );
};

export default chatMessage;
 