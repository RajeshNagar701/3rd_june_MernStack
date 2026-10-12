
import { Helmet } from 'react-helmet'
import { NavLink } from 'react-router-dom'
import React, { useEffect, useState } from 'react';



function Home_header() {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Hide loader after React mounts
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);


        // Initialize Owl Carousel after React renders
        const $ = window.jQuery;
        let $carousel;

        if ($ && $.fn.owlCarousel) {
            $carousel = $('.header-carousel');

            if ($carousel.length && !$carousel.hasClass('owl-loaded')) {
                $carousel.owlCarousel({
                    items: 1,
                    loop: true,
                    margin: 0,
                    autoplay: true,
                    autoplayTimeout: 5000,
                    autoplayHoverPause: true,
                    smartSpeed: 1000,
                    nav: true,
                    dots: true,
                    navText: [
                        '<i class="bi bi-chevron-left"></i>',
                        '<i class="bi bi-chevron-right"></i>'
                    ]
                });
            }
        } else {
            console.error(
                'jQuery or Owl Carousel failed to load. Check index.html.'
            );
        }

        return () => {
            clearTimeout(timer);

            if ($carousel?.hasClass('owl-loaded')) {
                $carousel.trigger('destroy.owl.carousel');
            }
        };
    }, []);


    return (
        <div>
            {/* Spinner Start */}


            {loading && (
                <div
                    id="spinner"
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        width: '100vw',
                        height: '100vh',
                        backgroundColor: '#ffffff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 2147483647
                    }}
                >
                    <div
                        style={{
                            width: '48px',
                            height: '48px',
                            border: '5px solid #dee2e6',
                            borderTop: '5px solid #06BBCC',
                            borderRadius: '50%',
                            animation: 'loader-spin 0.8s linear infinite'
                        }}
                    />
                    <style>
                        {`
                @keyframes loader-spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `}
                    </style>
                </div>
            )}

            {/* Spinner End */}
            {/* Navbar Start */}
            <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
                <a href="index.html" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
                    <h2 className="m-0 text-primary"><i className="fa fa-book me-3" />eLEARNING</h2>
                </a>
                <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto p-4 p-lg-0">
                        <NavLink to="/" className="nav-item nav-link">Home</NavLink>
                        <NavLink to="/about" className="nav-item nav-link">About</NavLink>
                        <NavLink to="/courses" className="nav-item nav-link">Courses</NavLink>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div className="dropdown-menu fade-down m-0">
                                <NavLink to="/team" className="dropdown-item">Our Team</NavLink>
                                <NavLink to="/testimonial" className="dropdown-item">Testimonial</NavLink>
                                <NavLink to="/pnf" className="dropdown-item">404 Page</NavLink>
                            </div>
                        </div>
                        <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink>
                    </div>
                    <a href className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">Join Now<i className="fa fa-arrow-right ms-3" /></a>
                </div>
            </nav>
            {/* Navbar End */}
            {/* Carousel Start */}
            <div className="container-fluid p-0 mb-5">
                <div className="owl-carousel header-carousel position-relative">
                    <div className="owl-carousel-item position-relative">
                        <img className="img-fluid" src="website/img/carousel-1.jpg" alt />
                        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(24, 29, 56, .7)' }}>
                            <div className="container">
                                <div className="row justify-content-start">
                                    <div className="col-sm-10 col-lg-8">
                                        <h5 className="text-primary text-uppercase mb-3 animated slideInDown">Best Online Courses</h5>
                                        <h1 className="display-3 text-white animated slideInDown">The Best Online Learning Platform</h1>
                                        <p className="fs-5 text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea sanctus eirmod elitr.</p>
                                        <a href className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                                        <a href className="btn btn-light py-md-3 px-md-5 animated slideInRight">Join Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="owl-carousel-item position-relative">
                        <img className="img-fluid" src="website/img/carousel-2.jpg" alt />
                        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(24, 29, 56, .7)' }}>
                            <div className="container">
                                <div className="row justify-content-start">
                                    <div className="col-sm-10 col-lg-8">
                                        <h5 className="text-primary text-uppercase mb-3 animated slideInDown">Best Online Courses</h5>
                                        <h1 className="display-3 text-white animated slideInDown">Get Educated Online From Your Home</h1>
                                        <p className="fs-5 text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea sanctus eirmod elitr.</p>
                                        <a href className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</a>
                                        <a href className="btn btn-light py-md-3 px-md-5 animated slideInRight">Join Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Carousel End */}

        </div>

    )
}

export default Home_header