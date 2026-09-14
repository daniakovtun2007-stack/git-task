import React from 'react';

export function Header(props) {
  return (
    <header className="header">
      <div className="header-left">
        <a href="#" className="logo-link">
          <img className="logo" src={props.logoSrc} alt="Netflix Logo" />
        </a>
        <span className="divider">|</span>
        <span className="date">{props.date}</span>
      </div>
      <div className="header-right">
        <button className="icon-btn" aria-label="Search">
          <img src={props.searchIconSrc} alt="Search" />
        </button>
        <img className="avatar" src={props.avatarSrc} alt="User Profile" />
      </div>
    </header>
  );
}