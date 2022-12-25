import React from 'react';
import AppWrap from '../HOC/HOC';
import { useGlobalContext } from '../context';
import { useNavigate } from 'react-router-dom';

const GenerateQR = () => {
  const { qrData,handleSetQR } = useGlobalContext();
  
  const navigate = useNavigate();
  
  const handleSubmit = e => {
    e.preventDefault();
    e.stopPropagation();

    const elements = e.currentTarget.elements;

    const name = elements.stu_name.value;
    const email = elements.stu_email.value;
    const classID = elements.stu_class.value;

    const generateQRData = {
      name,email,classID
    };

    handleSetQR(generateQRData);

    elements.stu_name.value ='';
    elements.stu_email.value ='';
    elements.stu_class.value ='';

    navigate('/qr_generated')

  };

  return (
    <>
 
      <div className='w-full mt-5'>

        <form action="" className='w-2/6 m-auto p-4w' onSubmit={handleSubmit}>

            <div className='mb-3'>
              <label htmlFor="stu_name" className='block mb-1'>Student's Name</label>
              <input type="text" 
              name='stu_name'
              className='w-full p-1 rounded outline-none border border-grey-400 block'
              placeholder="Add studend's name" />
            </div>

            <div className='mb-3'>
              <label htmlFor="stu_name" className='block mb-1'>Student's Email</label>
              <input type="text" 
              name='stu_email'
              className='w-full p-1 rounded outline-none border border-grey-400 block'
              placeholder="Add studend's email" />
            </div>

            <div className='mb-3'>
              <label htmlFor="stu_name" className='block mb-1'>Class ID</label>
              <input type="text" 
              name='stu_class'
              className='w-full p-1 rounded outline-none border border-grey-400 block'
              placeholder="Add class ID" />
            </div>

            <div className='flex justify-center items-center flex-col'>

            <h4 className='font-semibold'>Generate a QR Code</h4>

            <div className='my-2'>
              <img src="/img/downarrow.svg" alt="" className='h-8' />
            </div>

            <button className='w-16 h-16 block rounded-full text-white bg-primary font-semibold'>Start</button>
            </div>
          
          </form>  
      </div>

     
      
    </>
  )
}

export default AppWrap(GenerateQR);