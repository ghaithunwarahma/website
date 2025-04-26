import { useState } from 'react'

import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';

const NavBar = () => {  
  const [toggle, setToggle] = useState(false)

  // Navbar's total height => 24px + 64px + 24px === 102px
  // Navbar's total height => 24px + unkown + 24px === unkown
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <a href="https://www.takarum.com">
        {/* <img src={logo} alt="ghaithunwarahma" className="w-[64px] cursor-pointer" /> */}
        <img src={logo} alt="ghaithunwarahma" className="w-[103.6px] cursor-pointer" />
      </a>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
      {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-[#eeeae9]`}
            // className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white`}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img 
          src={toggle ? close : menu} 
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar2`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppis font-normal cursor-pointer text-[22px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-8'} text-[#eeeae9]`}
                // className={`font-poppis font-normal cursor-pointer text-[22px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-8'} text-white`}
              >
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar