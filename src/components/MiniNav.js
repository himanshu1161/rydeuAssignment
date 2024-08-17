import React from 'react';
import { HiChevronRight } from 'react-icons/hi';

const MiniNav = () => {
  return (
    <div className='flex flex-col'>
    <div className="flex flex-row items-center gap-4 mb-5 ml-6 sm:ml-[4rem] mt-[5rem] font-roboto">
      <span className='text-gray-500 hover:text-black flex items-center'>
        Home
        <HiChevronRight className='inline-block ml-2 text-gray-500 sm:hidden' />
      </span>
      <span className='text-gray-500 hover:text-black flex items-center'>
        Cities
        <HiChevronRight className='inline-block ml-2 text-gray-500 sm:hidden' />
      </span>
      <span className='text-gray-500 hover:text-black'>Rome</span>
    </div>
    <div className='flex sm:hidden flex-row gap-2 justify-center'>
        <div className='w-[97px] h-[28px] rounded-[17px] border bg-[#073A4D]'>
            <p className='text-[11px] text-center text-white pt-1'>At a Glance</p>
        </div>
        <div className='w-[97px] h-[28px] rounded-[17px] border border-[#898989] '>
            <p className='text-[11px] text-center text-[#898989] pt-1'>Transportation</p>
        </div>
        <div className='w-[97px] h-[28px] rounded-[17px] border border-[#898989]'>
            <p className='text-[11px] text-center text-[#898989] pt-1'>Airport Transfer</p>
        </div>
    </div>
    </div>
  );
};

export default MiniNav;
