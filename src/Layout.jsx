import React from 'react'
import Header from "./components/Header"
import { Outlet } from 'react-router-dom'
import Footer from "./components/Footer"
import "./App.css"

const Layout = () => {
  return (
    <main className='w-screen h-screen'>
        <Header />
        <Outlet />
        <Footer />
    </main>
  )
}

export default Layout