import React, { Component } from 'react';
import '../MessagingPage.css'; 
import profilePic from '../assets/logo.png';

export default class MessagingPage extends Component {
  
  render() {
    return (
      <div className="messaging-page">
        <header className="messaging-header">
          <button className="back-button">🔙</button>
          <h1 className="header-title">Campus Cuts</h1>
          <button className="header-options">⋮</button>
        </header>
        <div className="messages-container">
            <div className="message sent">
            <p className="message-text">Hey man, you free this weekend?</p>
          </div>
          <div className="message received">
            <img src={profilePic} alt="Profile" className="profile-picture" />
            <p className="message-text">Yup, I'll be giving cuts from 12-3 Saturday, come through!</p>
          </div>
          <div className="message sent">
            <p className="message-text">Awesome, thanks!</p>
          </div>
        </div>
        <form className="message-input-form">
          <input type="text" className="message-input" placeholder="Write a message..." />
          <button type="submit" className="send-message-button">➤</button>
        </form>
      </div>
    );
  }
}
