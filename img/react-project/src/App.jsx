import React, { Component } from 'react';
import { Header } from "./Header";
import { HeroContent } from "./HeroContent";
import { Carousel } from "./Carousel";
import { AgeBadge } from "./AgeBadge";
import './App.css';

// 1. Додано / на початку кожної картинки
const POPULAR_ITEMS = [
  { id: 1, title: 'Breaking Bad', image: '/img/Rectangle 6.png' },
  { id: 2, title: 'The Rain', image: '/img/Rectangle 7.png' },
  { id: 3, title: 'Life in a Year', image: '/img/Rectangle 8.png' },
  { id: 4, title: 'Money Heist: Korea', image: '/img/Rectangle 9.png' },
  { id: 5, title: 'Squid Game', image: '/img/Rectangle 11.png' },
];

export class App extends Component {
  render() {
    return (
      <div className="hero-container">
        <div className="overlay"></div>

        {/* 2. Додано / на початку шляхів у пропсах */}
        <Header
          date="Friday July 8th"
          logoSrc="/img/netflix-logo-png-2562 1.png"
          searchIconSrc="/img/Vector.svg"
          avatarSrc="/img/Ellipse 2.png"
        />

        <HeroContent
          genres={['Drama', 'Thriller', 'Supernatural']}
          title="Stranger Things"
          year="2019"
          director="Shawn Levy"
          seasonsCount={3}
          episodesCount={5}
          description="In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries."
          ratingImageSrc="/img/Group 5.svg"
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