import React from 'react'

const Navbar = () => {
  return (
    <nav  className='w-full px-[30px] flex justify-between items-center bg-black text-white'>
        <span className='text-white font-bold text-3xl'>Navbar</span>
        <ul className='flex justify-end items-center h-[80px] gap-[40px]'>
            <li className="lap-nav font-bold"><a href="">Home</a></li>
            <li className="lap-nav"><a href="">About</a></li>
            <li className="lap-nav"><a href="">Contact</a></li>
            <li className="lap-nav"><a href="">Login</a></li>
            <li id="menu"><span className="material-symbols-outlined">menu</span></li>
        </ul>
        {/* <ul className="mobile-nav">
            <li className="mobile-nav-li"><span id="close" className="material-symbols-outlined">close</span></li>
            <li className="mobile-nav-li"><a href="#">Home</a></li>
            <li className="mobile-nav-li"><a href="#">About</a></li>
            <li className="mobile-nav-li"><a href="#">Contact</a></li>
            <li className="mobile-nav-li"><a href="#">Login</a></li>
        </ul> */}
    </nav>
  )
}

export default Navbar
