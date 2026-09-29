import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from "./Header";
import { HeroContent } from "./HeroContent";
import { Carousel } from "./Carousel";
import { AgeBadge } from "./AgeBadge";
import Price from "./Price";
import Contact from "./Contact";
import About from "./About";

import bgImage from './assets/bg.jpg';
import netflixLogo from './assets/netflix-logo.png';
import searchIcon from './assets/fe_search.svg';
import avatar from './assets/avatar.png';
import ratingImage from './assets/rating.svg';
import movie1 from './assets/movie-1.png';
import movie2 from './assets/movie-2.png';
import movie3 from './assets/movie-3.png';
import movie4 from './assets/movie-4.png';
import movie5 from './assets/movie-5.png';
import './App.css';

const POPULAR_ITEMS = [
  { id: 1, title: 'Breaking Bad', image: movie1 },
  { id: 2, title: 'The Rain', image: movie2 },
  { id: 3, title: 'Life in a Year', image: movie3 },
  { id: 4, title: 'Money Heist: Korea', image: movie4 },
  { id: 5, title: 'Squid Game', image: movie5 },
];

const types = ['Драма', 'Трилер', 'Містика'];

function Home() {
  return (
    <>
      <HeroContent
        genres={types.map((type, index) => (
          <span key={index} className="genre">
            {type}
          </span>
        ))}
        title="Stranger Things"
        year="2019"
        director="Shawn Levy"
        seasonsCount={3}
        episodesCount={5}
        description="У 1980-х роках у штаті Індіана група молодих друзів стає свідками надприродних сил та таємних урядових експериментів. Шукаючи відповіді, діти розкривають серію надзвичайних таємниць."
        ratingImageSrc={ratingImage}
      />

      <div className="footer-wrapper">
        <Carousel title="ПОПУЛЯРНЕ ЦЬОГО ТИЖНЯ" items={POPULAR_ITEMS} />
        <AgeBadge age="16+" />
      </div>
    </>
  );
}

export function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <BrowserRouter>
      <div className="hero-container" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="overlay"></div>

        <Header
          date="П'ятниця, 8 липня"
          logoSrc={netflixLogo}
          searchIconSrc={searchIcon}
          avatarSrc={avatar}
          isLoggedIn={isLoggedIn}
          onLogin={handleLogin}
          onLogout={handleLogout}
        />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/price" element={<Price />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;