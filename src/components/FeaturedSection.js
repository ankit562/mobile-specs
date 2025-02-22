import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import './FeaturedSection.css'; // Create this file for custom styles

const FeaturedSection = ({ phones }) => {
    return (
      <div className="featured-section">
        <h2>Latest Additions</h2>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {phones.map((phone) => (
            <SwiperSlide key={phone.id}>
              <div className="featured-card">
                <h3>{phone.name}</h3>
                <p>Brand: {phone.brand}</p>
                <p>Price: ${phone.price}</p>
                <div className="highlight-specs">
                  <span>📷 {phone.camera}</span>
                  <span>💾 {phone.storage}</span>
                  <span>🔋 {phone.battery}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  };
  
  export default FeaturedSection;