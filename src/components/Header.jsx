import React from 'react'
import { NavLink } from 'react-router-dom';
import Logo from "../assets/Logo"
import CTAButton from './CTAButton';
import { BiUserCircle } from 'react-icons/bi'

const Header = () => {
    
    const headers  = [
        {
            name: 'Home',
            path: '/',
        },
        {
            name: 'About us',
            path: '/about-us'
        },
        {
            name: 'Contact',
            path: '/contact'
        },
        {
            name: 'FAQs',
            path: '/faqs'
        }
    ];

    const activeClassName = "text-dark-brown-color font-bold"

    const navClassName = "text-neutral-black-color"

  return (
    <div className='bg-secondary-color h-24 px-10 flex justify-between items-center'>
        <Logo />
        <nav>
            <ul className='flex justify-between w-96'>
                {
                    headers.map((headerInfo, index) => 
                        <li key={index}>
                            <NavLink
                                to={headerInfo.path}
                                className={({ isActive }) =>
                                    isActive ? activeClassName : navClassName
                                }
                            >
                                {headerInfo.name}
                            </NavLink>
                        </li>
                    )
                }
            </ul>
        </nav>
        <CTAButton name={'Log in'} includeIcon icon={<BiUserCircle />}/>
    </div>
  )
}

export default Header