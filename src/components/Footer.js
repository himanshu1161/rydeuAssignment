import React, { useState } from 'react';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';

const Footer = () => {
  const [isCompanyOpen, setCompanyOpen] = useState(false);
  const [isHelpCenterOpen, setHelpCenterOpen] = useState(false);
  const [isServicesOpen, setServicesOpen] = useState(false);

  return (
    <div className='flex flex-col bg-[#161616] font-roboto text-white '>
      <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center text-white px-4 py-8 sm:py-16 sm:ml-10'>
        {/* Logo and Description */}
        <div className='flex flex-col gap-4 mb-8 sm:mb-0'>
          <img src="/Rydeu2.png" alt="Logo" width={121} height={39} />
          <span>Solution for all ground transfers</span>
          <span>Connect with us</span>
        </div>
        
        {/* Flex Container for Headings */}
        <div className='flex flex-col sm:flex-row sm:gap-8 sm:justify-between w-full sm:ml-[5rem]'>
          {/* Company Links */}
          <div className='flex flex-col gap-4 mb-8 sm:mb-0'>
            <h2 className='text-lg font-semibold hidden sm:block'>COMPANY</h2>
            <div className='flex items-center justify-between cursor-pointer sm:hidden' onClick={() => setCompanyOpen(!isCompanyOpen)}>
              <h2 className='text-lg font-semibold'>COMPANY</h2>
              {isCompanyOpen ? <HiChevronUp className='w-5 h-5' /> : <HiChevronDown className='w-5 h-5' />}
            </div>
            <ul className={`text-[#EFEFEF] text-[13px] font-light ${isCompanyOpen ? 'block' : 'hidden'} sm:block`}>
              <li className='py-1'>About Us</li>
              <li className='py-1'>Privacy Policy</li>
              <li className='py-1'>Terms and Conditions</li>
              <li className='py-1'>Imprint</li>
              <li className='py-1'>Careers/ Jobs</li>
              <li className='py-1'>Sitemap</li>
            </ul>
          </div>

          {/* Help Center Links */}
          <div className='flex flex-col gap-4 mb-8 sm:mb-0 sm:ml[-5rem]'>
            <h2 className='text-lg font-semibold hidden sm:block'>HELP CENTER</h2>
            <div className='flex items-center justify-between cursor-pointer sm:hidden' onClick={() => setHelpCenterOpen(!isHelpCenterOpen)}>
              <h2 className='text-lg font-semibold'>HELP CENTER</h2>
              {isHelpCenterOpen ? <HiChevronUp className='w-5 h-5' /> : <HiChevronDown className='w-5 h-5' />}
            </div>
            <ul className={`text-[#EFEFEF] text-[13px] font-light ${isHelpCenterOpen ? 'block' : 'hidden'} sm:block`}>
              <li className='py-1'>Contact Us</li>
              <li className='py-1'>Customer FAQs</li>
              <li className='py-1'>Business FAQs</li>
              <li className='py-1'>Supplier FAQs</li>
            </ul>
          </div>

          {/* Our Services Links */}
          <div className='flex flex-col gap-4 mb-8 sm:mb-0'>
            <h2 className='text-lg font-semibold hidden sm:block'>OUR SERVICES</h2>
            <div className='flex items-center justify-between cursor-pointer sm:hidden' onClick={() => setServicesOpen(!isServicesOpen)}>
              <h2 className='text-lg font-semibold'>OUR SERVICES</h2>
              {isServicesOpen ? <HiChevronUp className='w-5 h-5' /> : <HiChevronDown className='w-5 h-5' />}
            </div>
            <ul className={`text-[#EFEFEF] text-[13px] ${isServicesOpen ? 'block' : 'hidden'} sm:block`}>
              <li className='py-1'>Airport Transfer</li>
              <li className='py-1'>City Transfer</li>
              <li className='py-1'>Hourly Transfer</li>
              <li className='py-1'>Business</li>
              <li className='py-1'>Supplier</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className='mt-12 mx-4 sm:mx-8 text-[#EFEFEF]' />

      {/* Copyright */}
      <span className='text-[13px] text-[#EFEFEF] font-light text-center my-8 px-4 sm:px-8'>
        Copyright ©️ 2020 rydeu.com All rights reserved.
      </span>
    </div>
  );
};

export default Footer;
