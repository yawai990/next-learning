import { useState, useEffect } from 'react';
import AppWrap from '../HOC/HOC';
import { AiOutlineScan, AiOutlineCloseCircle } from 'react-icons/ai';
import { IoIosQrScanner } from 'react-icons/io';
import QrReader from 'react-qr-scanner';
import QRError from '../components/QRError';

const ScanQR = () => {

  const [ scannerOpen , setScannerOpen ] = useState(false);
  const [ qrCode, setQrCode ] = useState('');
  const [ image, setImage ] = useState('');

  const handleOpen = () => setScannerOpen(!scannerOpen);

    var handleScan = data =>{
      console.log(data)
    }
    var handleError = data =>{
      console.log(data)
    }



 return (
    <div className='mt-10 flex justify-center items-center flex-col relative'>
    <h3>Click on the shutter button to scan QR codes</h3>

    <div className="w-full h-full absolute bg-white rounded-xl">
      <div className='text-end p-4'>
        <button className='p-1 text-2xl bg-white rounded-full drop-shadow-lg'>
          <AiOutlineCloseCircle />
        </button>
      </div>

      <div className='flex flex-col justify-center items-center'>
      <QRError />
      </div>
    </div>

    <div className='w-64 h-64'>
      {
        !scannerOpen ?
      <IoIosQrScanner className='w-full h-full' />
      :
        <div>
          <QrReader
          delay={{
            delay : 150
          }}
          style={{
            width : 320,
            height : 240
          }}
          onError={handleError}
          onScan={handleScan}
          />
          </div>
      }
    </div>

    <button 
    onClick={handleOpen}
    className="block w-12 h-12 rounded-full bg-primary text-white flex justify-center items-center text-3xl">
      <AiOutlineScan />
    </button>
    </div>
  )
}

export default AppWrap(ScanQR);