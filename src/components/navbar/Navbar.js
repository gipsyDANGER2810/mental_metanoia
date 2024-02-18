import React from 'react'
import logo from '../../photos/logo2.png';
import './Navbar.css'

function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                     <a class="navbar-brand" href="#"> 
                        <img className='logo' src={logo} alt='LOGO' style={{ maxWidth: '100px', maxHeight: '50px' }}></img>
                    </a> 
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className='buttons'>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Services
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">All Services</a></li>
                                    <li><hr class="dropdown-divider"/></li>
                                    <li><a class="dropdown-item" href="#">Self</a></li>
                                    <li><a class="dropdown-item" href="#">Couples Therapy</a></li>
                                    <li><a class="dropdown-item" href="#">Teen</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">About Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" href="#">Contact Us</a>
                            </li>
                        </ul>
                        <button type="button" class="btn btn-primary">Book Online Session</button>
                        {/* <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button class="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                    </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
