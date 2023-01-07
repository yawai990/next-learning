import React from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import { GenerateQR, GeneratedQR, ScanQR, Datas } from './pages';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout';
import FAQ from './pages/FAQ';
import Home from './pages/Home';

function App() {

  const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: '/faqs',
        element: <FAQ />
      },
      {
        path: '/qr_generate',
        element: <GenerateQR />
      },
      {
        path: '/qr_generated',
        element: <GeneratedQR />
      },
      {
        path: '/qr_scan',
        element: <ScanQR />,
      },
      {
        path: '/datas',
        element: <Datas />,
      },
      {
        path: '/datas/month',
        element: <Datas />
      },
      {
        path: '/datas/month/statis',
        element: <Datas />
      }
    ],
  },
]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
