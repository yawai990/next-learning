import React from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

const Pagination = () => {
  return (
    <div className='w-full h-12 bg-white text-black py-2 flex justify-end rounded-b'>
        <div className="w-5/12 flex items-center gap-2">
            <div className='flex items-center gap-2'>
            <button className='p-2 text-white bg-primary text-lg rounded'>
                <MdKeyboardArrowLeft />
            </button>
            <button className='px-2 py-1 bg-gray-200 border rounded '>1</button>
            <button className='p-2 hover:text-white hover:bg-primary duration-150 rounded'>2</button>
            <button className='p-2 hover:text-white hover:bg-primary duration-150 rounded'>3</button>
            <button className='p-2 hover:text-white hover:bg-primary duration-150 rounded'>4</button>
            <button className='p-2 text-white bg-primary text-lg rounded hover:text-white hover:bg-primary duration-150 rounded'>
                <MdKeyboardArrowRight />
            </button>
            </div>

            <div>
            <span>Go To Page</span>
            <input type="number" value={1} className='w-8 h-8 outline-none border apperance-none bg-gray-100 ml-2 text-center' />
            </div>

        </div>

       
    </div>
  )
}

export default Pagination