import React, { Component } from 'react';

export class Carousel extends Component {
  scroll(direction) {
    const list = document.getElementById('cards-list');
    if (list) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      list.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }

  render() {
    return (
      <section className="footer-carousel">
        <div className="carousel-header">
          <h3>{this.props.title}</h3>
          <div className="carousel-nav">
            <button 
              className="arrow-btn" 
              aria-label="Previous" 
              onClick={() => this.scroll('left')}
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button 
              className="arrow-btn" 
              aria-label="Next" 
              onClick={() => this.scroll('right')}
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>

        <div className="cards-list" id="cards-list">
          {this.props.items.map((item) => (
            <div className="card" key={item.id}>
              <img src={item.image} alt={item.title} />
            </div>
          ))}
        </div>
      </section>
    );
  }
}