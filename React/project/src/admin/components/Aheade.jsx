import React from 'react'
import { NavLink } from 'react-router-dom'

function Aheade({title}) {
    return (
        <div>
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
                        <NavLink to="/" className="nav-item nav-link">Dashboard</NavLink>
                     
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Category</a>
                            <div className="dropdown-menu fade-down m-0">
                                <NavLink to="/add_categories" className="dropdown-item">Add</NavLink>
                                <NavLink to="/manage_categories" className="dropdown-item">Manage</NavLink>
                            </div>
                        </div>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Courses</a>
                            <div className="dropdown-menu fade-down m-0">
                                <NavLink to="/team" className="dropdown-item">Add</NavLink>
                                <NavLink to="/testimonial" className="dropdown-item">Manage</NavLink>
                            </div>
                        </div>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Testimonial</a>
                            <div className="dropdown-menu fade-down m-0">
                                <NavLink to="/team" className="dropdown-item">Add</NavLink>
                                <NavLink to="/testimonial" className="dropdown-item">Manage</NavLink>
                            </div>
                        </div>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Team</a>
                            <div className="dropdown-menu fade-down m-0">
                                <NavLink to="/team" className="dropdown-item">Add</NavLink>
                                <NavLink to="/testimonial" className="dropdown-item">Manage</NavLink>
                            </div>
                        </div>
                        <NavLink to="/" className="nav-item nav-link">Customer</NavLink>
                        <NavLink to="/" className="nav-item nav-link">Contact</NavLink>

                    </div>
                    <a href className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">Logout <i className="fa fa-arrow-right ms-3" /></a>
                </div>
            </nav>
            {/* Navbar End */}
            {/* Header Start */}
            <div className="container-fluid bg-primary py-5 mb-5 page-header">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 text-center">
                            <h1 className="display-3 text-white animated slideInDown">{title}</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center">
                                    <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                                    <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                                    <li className="breadcrumb-item text-white active" aria-current="page">{title}</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            {/* Header End */}
        </div>
    )
}

export default Aheade