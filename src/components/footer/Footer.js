import React from 'react'
import './Footer.css'
import logo from '../../photos/logo2.png';
import '@fortawesome/fontawesome-free/css/all.css';


function Footer() {
  return (
    <div className='footer'>
      <div className="footer_logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className='links'>
        <div className='services'>
          <p>OUR SERVICES</p>
          <div className="services_lists">
            Marriage
          </div>
          <div className="services_lists">
            Marriage
          </div>
          <div className="services_lists">
            Marriage
          </div>
        </div>
        <div className='aboutUs'>
          <p>ABOUT US</p>
          <div className="aboutUs_lists">
            Contact us
          </div>
          <div className="aboutUs_lists">
            Contact us
          </div>
          <div className="aboutUs_lists">
            Contact us
          </div>
        </div>
        <div className='usefulLinks'>
        <p>USEFUL LINKS</p>
        <div className="usefulLinks_lists">
          Experts
        </div>
        <div className="usefulLinks_lists">
          Experts
        </div>
        <div className="usefulLinks_lists">
          Experts
        </div>
        </div>
      </div>

      <div className="footer_icons">
        <button>
          <i className="fab fa-facebook"></i>
        </button>
        <button>
          <i className="fab fa-instagram"></i>
        </button>
        <button>
          <i class="fa-brands fa-x-twitter"></i>
        </button>
        <button>
          <i class="fa-solid fa-envelope"></i>
        </button>
      </div>
    </div>
  );
}

export default Footer
