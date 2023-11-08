import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CarouselItem from './element/carouselItem';
import BrowseItem from './element/BrowseItem ';
import MerchantSection from './element/MerchantSection';


// import header and footer
import Headers from '../../../partials/header/Header';
import Footer from '../../../partials/footer/Footer';



// impor home page css
import './style.css'

const HomePage = () => {


  // carousel data
  const carouselData = [
    { title: 'Restaurants', imageSrc: '/images/image5.png' },
    { title: 'Spas & Salons', imageSrc: '/images/image6.png' },
    { title: 'Retail', imageSrc: '/images/image7.png' },
    { title: 'Fitness', imageSrc: '/images/image8.png' },
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
        breakpoint: 767,
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


  // browse data
  const browseData = [

    {
      imageSrc: '/images/Rectangle 223.png',
      title: 'Download the app',
      description: 'Discover BOGO merchants offering deals near you!',
      animation: 'fade-up',
    },
    {
      imageSrc: '/images/Rectangle 224-1.png',
      title: 'Browse merchants',
      description: 'Going out to eat? Going to a spa? Looking for something fun to do?',
      animation: 'fade-down',
    },
    {
      imageSrc: '/images/Rectangle 224.png',
      title: 'Redeem & Save',
      description: 'Present your BOGO voucher when paying and instantly save!',
      animation: 'fade-up',
    },

  ];




  return (
    <>

      <Headers />


      {/* Banner Section */}
      <div className="banner_main_section">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="banner_left_section">
                <h1>
                  SAVE MONEY WITH <span>THE BOGO APP</span>
                </h1>
                <p>Exclusive Buy One Get One deals that fit every lifestyle!</p>
              </div>
              <div className="playstore-icon">
                <a href="https://play.google.com/store/apps/details?id=com.bogoapp.bogoapp">
                  <img
                    src="/images/Google-Play-Button_resize.png"
                    alt=""
                    className="img-fluid"
                  />
                </a>
                <a href="https://apps.apple.com/us/app/bogo/id1541500003">
                  <img
                    src="/images/App-Store-Button_resize.png"
                    alt=""
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>
            <div className="col-md-7">
              <div className="banner_right_section">
                <img
                  src="/images/banner_right.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Browse Section */}
      <div className="browse_section">
        <div className="container">
          <div className="row">
           {browseData.map( (item, index) =>  (
              <div className="col-sm-6 col-md-4 col-lg-4" key={index}>
                <BrowseItem 
                  imageSrc={item.imageSrc}
                  title={item.title}
                  description={item.description}
                  animation={item.animation}
                />
              </div>
           ))}
          </div>

          {/* carousel section */}
          <div className="browse_bottom_section">
            <Slider {...carouselSettings}>
              {carouselData.map((item, index) => (
                <CarouselItem key={index} title={item.title} imageSrc={item.imageSrc} />
              ))}
            </Slider>
          </div>
        </div>
      </div>

      {/* Merchant Section */}
      <MerchantSection />



      <Footer />
    </>
  );
};

export default HomePage;
