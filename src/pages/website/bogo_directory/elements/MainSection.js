import React from 'react';
import CarouselItem from '../../home/element/carouselItem';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import Components
import BogoDirectoryCard from './BogoDirectoryCard';
import SearchBox from './SearchBox';
import { useSelector } from 'react-redux';

function MainSection() {

  const allBusinessData = useSelector((state) => state.merchantAuth.allBusinessData);  

    // carousel data
  const carouselData = [
    { title: 'Restaurants', imageSrc: '/images/image5.png' },
    { title: 'Spas & Salons', imageSrc: '/images/image6.png' },
    { title: 'Retail', imageSrc: '/images/image7.png' },
    { title: ' Fitness', imageSrc: '/images/image8.png' },
    { title: 'Entertainment', imageSrc: '/images/image9.png' },
    { title: 'Hotels', imageSrc: '/images/image10.png' },
    { title: 'Services', imageSrc: '/images/image11.png' },
    // Add other carousel items here
  ];

  const carouselSettings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };



  return (
    <>
      {/* <!-- Body Section Start --> */}
      <section className="bodo_directory_section">
        <div className="container">

         
          {/* carousel section */}
          <div className="browse_bottom_section">
            <Slider {...carouselSettings}>
              {carouselData.map((item, index) => (
                <CarouselItem key={index} title={item.title} imageSrc={item.imageSrc} />
              ))}
            </Slider>
          </div>

    
              <BogoDirectoryCard allBusinessData={allBusinessData}/>
 
        </div>
      </section>
    </>
  );
}

export default MainSection;
