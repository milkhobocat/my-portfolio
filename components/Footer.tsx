import React from 'react';

const Footer = () => {
    return (
      <footer className="w-full pt-10 pb-5 flex justify-center" id="contact">
        <div className="w-full absolute left-0 -bottom-72 min-h-96">
          <img
            src="footer-grid.svg"
            alt="grid"
            className="w-full h-full opacity-50"
          />
        </div>
        <div className="flex mt-4 md:flex-row flex-col justify-center items-center">
          <p className="md:text-base text-sm md:font-normal font-light m-0">Copyright © 2024 Karrel Uy</p>
        </div>
      </footer>
    );
};

export default Footer;
