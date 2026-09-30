import React, { Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export class Carousel extends Component {
  render() {
    const { title, items } = this.props;

    return (
      <section className="footer-carousel">
        <div className="carousel-header">
          <h3>{title}</h3>
          <div className="carousel-nav">
            <button 
              className="arrow-btn custom-prev" 
              aria-label="Previous"
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button 
              className="arrow-btn custom-next" 
              aria-label="Next"
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={3}
          pagination={{ clickable: true }}
          navigation={{
            prevEl: '.custom-prev',
            nextEl: '.custom-next',
          }}
        >
          {items && items.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="card">
                <img src={item.image} alt={item.title} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    );
  }
}