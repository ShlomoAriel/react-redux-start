import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';
// import LoadingDots from './LoadingDots';

const Header = () => {
  return (
    // <nav>
    //   <IndexLink to="/" activeClassName="active">Home</IndexLink>
    //   {" | "}
    //   <Link to="/about" activeClassName="active">About</Link>
    // </nav>
     <header className="page-head header-1 text-center">
        <ul className="list-inline">
          <li><a href="#">twitter</a></li>
          <li><a href="#">facebook</a></li>
          <li><a href="#">pinterest</a></li>
          <li><a href="#">youtube</a></li>
          <li><a href="#">instagram</a></li>
        </ul>
        <div className="jumbotron-variant-1"><span className="material-icons-notifications_active icon-lg icon-white"></span>
          <h1><a href="./">Apartments</a></h1>
          <h5>We'll help you find your new home</h5>
        </div>
        
        <div data-height="" data-min-height="" className="swiper-container swiper-slider">
          <div className="swiper-wrapper">
            <div data-slide-bg="images/slider-1-2050x1040.jpg" className="swiper-slide"></div>
            <div data-slide-bg="images/slider-2-2050x1040.jpg" className="swiper-slide"></div>
            <div data-slide-bg="images/slider-3-2050x1040.jpg" className="swiper-slide"></div>
          </div>
          
          <div className="swiper-pagination"></div>
        </div>
        
        <div className="rd-navbar-wrap">
          <nav data-layout="rd-navbar-fixed" data-sm-layout="rd-navbar-fullwidth" data-sm-device-layout="rd-navbar-fixed" data-md-device-layout="rd-navbar-fixed" data-lg-layout="rd-navbar-static" data-lg-device-layout="rd-navbar-static" className="rd-navbar" data-sm-stick-up-offset="900px" data-md-stick-up-offset="900px" data-lg-stick-up-offset="1000px">
            <div className="rd-navbar-inner">
              <div className="rd-navbar-inner-wrap">
              
                <div className="rd-navbar-panel">
                
                  <button data-rd-navbar-toggle=".rd-navbar-nav-wrap" className="rd-navbar-toggle"><span></span></button>
                  
                  <div className="rd-navbar-brand"><a href="index.html" className="brand-name">apartments</a></div>
                </div>
                <div className="rd-navbar-nav-wrap">
                
                  <ul className="rd-navbar-nav">
                    <li className="active"><a href="./">Home<span data-custom-toggle="megamenu" className="megamenu-toggle"></span></a>
                    
                      <div id="megamenu" className="rd-navbar-megamenu">
                        <ul className="range">
                          <li className="cell-sm-4">
                            <div className="thumbnail-variant-2">
                              <div 
                              
                              
                               className="img-block"></div>
                              <div className="caption">
                                <div className="h5"><a href="blog-post.html">Vancouver</a></div>
                                <p>Many students are cash-strapped, nowadays. Nevertheless, their purchasing power is very high. Research reveals that 20 million students in the US have</p><a href="blog-post.html" className="btn-link">Learn more</a>
                              </div>
                            </div>
                          </li>
                          <li className="cell-sm-4">
                            <div className="thumbnail-variant-2">
                              <div 
                              
                              
                               className="img-block"></div>
                              <div className="caption">
                                <div className="h5"><a href="blog-post.html">Burnaby</a></div>
                                <p>What is stopping you from believing in the business of your dreams? Insecurity? Fear? Lack of confidence? All of the above? How</p><a href="blog-post.html" className="btn-link">Learn more</a>
                              </div>
                            </div>
                          </li>
                          <li className="cell-sm-4">
                            <div className="thumbnail-variant-2">
                              <div 
                              
                              
                              
                               className="img-block"></div>
                              <div className="caption">
                                <div className="h5"><a href="blog-post.html">Richmond</a></div>
                                <p>Thousands of people dream of having their own business and even more so be a successful entrepreneur. But what does it take</p><a href="blog-post.html" className="btn-link">Learn more</a>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="gallery.html">Gallery</a>
                    
                      <ul className="rd-navbar-dropdown">
                        <li><a href="gallery_masonry.html">Masonry Style</a></li>
                        <li><a href="gallery_grid.html">Grid Style</a></li>
                        <li><a href="gallery_justified.html">Justified Style</a></li>
                        <li><a href="gallery_list.html">List Style</a></li>
                      </ul>
                    </li>
                    <li><a href="blog.html">Blog</a>
                    
                      <ul className="rd-navbar-dropdown">
                        <li><a href="blog-post.html">Blog Post</a></li>
                        <li><a href="image-format.html">Image Format</a></li>
                        <li><a href="video-format.html">Video Format</a></li>
                        <li><a href="audio-format.html">Audio Format</a></li>
                        <li><a href="gallery-format.html">Gallery Format</a></li>
                        <li><a href="choice.html">Your Choice</a></li>
                      </ul>
                    </li>
                    <li><a href="contacts.html">Contacts</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
  );
};

// Header.propTypes = {
//   loading: PropTypes.bool.isRequired
// };

export default Header;

      // <IndexLink to="/" activeClassName="active">Home</IndexLink>
      // {" | "}
      // <Link to="/courses" activeClassName="active">Courses</Link>
      // {" | "}
      // <Link to="/about" activeClassName="active">About</Link>
      // {loading && <LoadingDots interval={100} dots={20}/>}