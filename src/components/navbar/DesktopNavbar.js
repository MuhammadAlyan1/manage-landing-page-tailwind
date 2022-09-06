import React from 'react';
import manageLogo from '../../assets/images/logo.svg';

const DesktopNavbar = () => {
  return (
    <nav className="flex items-center justify-around py-4">
      <div className="cursor-pointer">
        <img src={manageLogo} alt="manage logo" />
      </div>
      <div>
        <ul className="flex gap-6">
          <li className="link">Pricing</li>
          <li className="link">Product</li>
          <li className="link">About Us</li>
          <li className="link">Careers</li>
          <li className="link">Community</li>
        </ul>
      </div>
      <button className="button">Get Started</button>
    </nav>
  );
};

export default DesktopNavbar;
