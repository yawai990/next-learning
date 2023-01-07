import { useState, useEffect } from 'react';
import AppWrap from '../HOC/HOC';
import { AiOutlineScan, AiOutlineCloseCircle } from 'react-icons/ai';
import { IoIosQrScanner } from 'react-icons/io';
import QrReader from 'react-qr-scanner';
import QRError from '../components/QRError';
import ScanComplete from '../components/ScanComplete';

const ScanQR = () => {

  const [ scannerOpen , setScannerOpen ] = useState(false);
  const [ qrCode, setQrCode ] = useState('');
  const [ image, setImage ] = useState('');
  const [ scanErr, setScanErr ] = useState(false); //to do
  const [ scanData, setScanData ] = useState(); //to do
  const [ scanComplete, setScanComplete ] = useState(false);


  const scanErrHand = () => setScanErr(!scanErr)

  const handleOpen = () => setScannerOpen(!scannerOpen);


    const handleScan = data =>{
      setScanData('')
        //if we have the data, change value the scan complete
        setScanComplete(false)
      if(data){
        setScanData(data)
        //if we have the data, change value the scan complete
        setScanComplete(true)
        handleOpen()

        if(scanComplete){
          //to do
          //close the scan camera
          //call the api
          //wait for the api response
          //redirect to the scan page, reopen the scan camera
          console.log('run')
          setTimeout(() => {
            setScanData('')
            setScanComplete(false)
            setScannerOpen(true)
          }, 1000);
        }
      }
    };


    var handleError = data =>{
      console.log(data)
    }



 return (
    <div className='mt-10 flex justify-center items-center flex-col relative'>
    {
      !scanComplete ?
    <h3>Click on the shutter button to scan QR codes</h3>:
    <h3>Scanning Completed</h3>
    }

    {
        scanErr &&   
      <div className="w-full h-full absolute bg-white rounded-xl">
      <div className='text-end p-4'>
        <button className='p-1 text-2xl bg-white rounded-full drop-shadow-lg'>
          <AiOutlineCloseCircle onClick={scanErrHand} />
        </button>
      </div>

     <div className='flex flex-col justify-center items-center'>
        <QRError />
        </div>
    </div>
      }
    

    <div className='min-w-64 min-h-64'>
      {
        scannerOpen ? <div className='w-full h-full'>
        <QrReader
        delay={{
          delay : 100
        }}
        style={{
          width : 350,
          height : 280
        }}
        onError={handleError}
        onScan={handleScan}
        />
        </div>: !scanComplete ?
      <div className='my-5'>
      <img src="/img/border.png" alt="" className='w-64 h-64 object-cover' />
      </div>
      :
      <div className='w-64 h-64 my-4'>
          <img src="/img/QR.png" alt="" className='w-full h-full' />
      </div>
      }   
    </div>

    {
      !scanComplete ?
    <button 
    onClick={handleOpen}
    className="block w-12 h-12 rounded-full bg-primary text-white flex justify-center items-center text-3xl">
      <AiOutlineScan />
    </button>:

    // to do click function
    <button className='bg-primary py-1 px-5 text-white rounded-lg'>save</button>
    }

    </div>
  )
}

export default AppWrap(ScanQR);