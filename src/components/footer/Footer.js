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
      </div>
    </div>
  );
}

export default Footer
