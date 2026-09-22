import React, { useEffect, useState } from "react";

export function Header(props) {
  const [search, setSearch] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    console.log("Поле пошуку відкрито:", isSearchOpen);
  }, [isSearchOpen]);

  function showSearchInput() {
    setIsSearchOpen((prev) => !prev);
  }

  function handleLogoutClick() {
    const result = window.confirm("Are you sure you want to log out?");
    if (result) {
      props.onLogout();
      alert("You logged out!");
    }
  }

  return (
    <header className="header">
      {/* LEFT */}
      <div className="header-left">
        <a href="#" className="logo-link">
          <img
            className="logo"
            src={props.logoSrc}
            alt="Netflix Logo"
          />
        </a>
        <span className="divider">|</span>
        <span className="date">{props.date}</span>
      </div>

      {/* RIGHT */}
      <div className="header-right">
        {/* SEARCH */}
        {isSearchOpen && (
          <div>
            <input
              className="search-input"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <p>Search: {search}</p>
          </div>
        )}

        <button
          onClick={showSearchInput}
          className="icon-btn"
          aria-label="Search"
        >
          <img src={props.searchIconSrc} alt="Search" />
        </button>

        {/* AUTH BUTTONS & AVATAR */}
        {props.isLoggedIn ? (
          <>
            <button onClick={handleLogoutClick} className="logout-btn">
              Logout
            </button>
            <img
              className="avatar"
              src={props.avatarSrc}
              alt="User Profile"
            />
          </>
        ) : (
          <button onClick={props.onLogin} className="login-btn">
            Login
          </button>
        )}
      </div>
    </header>
  );
}