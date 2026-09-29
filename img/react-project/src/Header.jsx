import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
    const result = window.confirm("Ви впевнені, що хочете вийти?");
    if (result) {
      props.onLogout();
      alert("Ви успішно вийшли!");
    }
  }

  return (
    <header className="header">
      {/* LЕFT */}
      <div className="header-left">
        <Link to="/" className="logo-link">
          <img
            className="logo"
            src={props.logoSrc}
            alt="Netflix Logo"
          />
        </Link>
        <span className="divider">|</span>
        <span className="date">{props.date}</span>
      </div>

      {/* RIGHT */}
      <div className="header-right">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/price">Price</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* SEARCH */}
        {isSearchOpen && (
          <div className="search-box">
            <input
              className="search-input"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
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

export default Header;