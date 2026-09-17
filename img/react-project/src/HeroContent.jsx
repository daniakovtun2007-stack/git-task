import React from 'react';

let streamBtn = () => {
  alert('Stream Now button clicked!');
}

export function HeroContent(props) {
  return (
    <main className="content">
      <div className="genre">
        {props.genres.map((genre, index) => (
          <React.Fragment key={genre}>
            {genre}
            {index < props.genres.length - 1 && <span>|</span>}
          </React.Fragment>
        ))}
      </div>

      <h1 className="title">{props.title}</h1>

      <div className="meta-info">
        <span className="year">{props.year}</span>
        <span className="bold-sep">|</span>
        <span className="director">
          <strong>DIRECTOR:</strong> {props.director}
        </span>
        <span className="bold-sep">|</span>
        <span className="seasons">
          <strong>SEASONS:</strong> {props.seasonsCount} ({props.episodesCount} Episodes)
        </span>
      </div>

      <p className="description">{props.description}</p>

      <div className="rating">
        <img src={props.ratingImageSrc} alt="Rating" className="rating-stars" />
      </div>

      <div className="action-buttons">
        <a href="#" className="btn btn-primary" onClick={streamBtn}>
          STREAM NOW <i className="fa-solid fa-circle-play"></i>
        </a>
        <a href="#" className="btn btn-secondary">
          ALL EPISODES
        </a>
      </div>
    </main>
  );
}