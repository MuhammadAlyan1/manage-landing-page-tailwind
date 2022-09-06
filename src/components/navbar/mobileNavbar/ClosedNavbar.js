import React from 'react';
import manageLogo from '../../../assets/images/logo.svg';
import { GiHamburgerMenu } from 'react-icons/gi';

const ClosedNavbar = ({ setIsNavbarOpened }) => {
  const openNavbar = () => {
    // disable scroll when modal is opened
    document.body.style.overflow = 'hidden';
    setIsNavbarOpened(true);
  };

  return (
    <nav className={'mx-2 mt-2 flex items-center justify-around py-4'}>
      <div className="cursor-pointer">
        <img src={manageLogo} alt="manage logo" />
      </div>
      <div className="cursor-pointer text-3xl" onClick={openNavbar}>
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default ClosedNavbar;
