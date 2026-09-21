import React, { useState } from 'react';

export function Header(props) {

  const [search, setSearch] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  function showSearchInput() {
    setIsSearchOpen(isSearchOpen => !isSearchOpen);
  }

  return (
    <header className="header">

      <div className="header-left">

        <a href="#" className="logo-link">
          <img
            className="logo"
            src={props.logoSrc}
            alt="Netflix Logo"
          />
        </a>

        <span className="divider">|</span>

        <span className="date">
          {props.date}
        </span>

      </div>

      <div className="header-right">

        {isSearchOpen && (
          <>
          <div>
            <input
              className="search-input"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <p>Search: {search}</p>
            </div>
          </>
        )}

        <button
          onClick={showSearchInput}
          className="icon-btn"
          aria-label="Search"
        >
          <img
            src={props.searchIconSrc}
            alt="Search"
          />
        </button>

        {props.isLoggedIn && (
          <img
            className="avatar"
            src={props.avatarSrc}
            alt="User Profile"
          />
        )}

      </div>

    </header>
  );
}