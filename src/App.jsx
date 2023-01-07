import React from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import { GenerateQR, GeneratedQR, ScanQR, Datas } from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<GenerateQR />} />
        <Route path='/qr_generate' element={<GenerateQR />} />
        <Route path='/qr_generated' element={<GeneratedQR />} />
        <Route path='/qr_scan' element={<ScanQR />} />
        <Route path='/datas' element={<Datas />} />
        <Route path='/datas/month' element={<Datas />} />
        <Route path='/datas/month/statis' element={<Datas />} />
      </Routes>
    </BrowserRouter >

  )
}

export default App