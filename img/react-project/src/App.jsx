import React, { Component } from 'react';
import { Header } from "./Header";
import { HeroContent } from "./HeroContent";
import { Carousel } from "./Carousel";
import { AgeBadge } from "./AgeBadge";
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
import { LoginBtn } from "./LoginBtn.jsx";
import './App.css';

const POPULAR_ITEMS = [
  { id: 1, title: 'Breaking Bad', image: movie1 },
  { id: 2, title: 'The Rain', image: movie2 },
  { id: 3, title: 'Life in a Year', image: movie3 },
  { id: 4, title: 'Money Heist: Korea', image: movie4 },
  { id: 5, title: 'Squid Game', image: movie5 },
];
const types = ['Drama', 'Thriller', 'Supernatural'];
let isLoggedIn = false;
export class App extends Component {
  render() {
    return (
      <div className="hero-container" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="overlay"></div>
        {!isLoggedIn ? (
  <LoginBtn className="login-btn" />
) : (
  <img className="avatar" src={avatar} alt="User Profile" />
)}
        <Header
  date="Friday July 8th"
  logoSrc={netflixLogo}
  searchIconSrc={searchIcon}
  avatarSrc={avatar}
  isLoggedIn={isLoggedIn}
/>

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
          description="In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries."
          ratingImageSrc={ratingImage}
        />

        <div className="footer-wrapper">
          <Carousel title="POPULAR THIS WEEK" items={POPULAR_ITEMS} />
          <AgeBadge age="16+" />
        </div>
      </div>
    );
  }
}

export default App;