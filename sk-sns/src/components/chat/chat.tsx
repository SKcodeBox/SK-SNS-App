import React from 'react';
import "./chat.scss";
import ChatHeader from './chatHeader';
import AddIcon from '@mui/icons-material/Add';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import GifBoxIcon from '@mui/icons-material/GifBox';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import ChatMessage from './chatMessage';

const Chat = () => {
  return (
    <div className='chat'>

      <ChatHeader/>  

      <div className='chatMessage'>
        <ChatMessage/>
        <ChatMessage/>
        <ChatMessage/>
      </div>

      <div className='chatInput'>
        <AddIcon/>
        <form>
          <input type='text' placeholder='#メッセージ送信'></input>
          <button type='submit' className='chatInputButton'>
          送信
          </button>
        </form>

        <div className='chatInputIcons'></div>
        <CardGiftcardIcon/>
        <GifBoxIcon/>
        <InsertEmoticonIcon/>

      </div>
    </div>
  );
};

export default Chat;
