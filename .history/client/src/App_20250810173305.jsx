import React from 'react'
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (

     <>
     <nav class="h-[70px] relative w-full px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between z-30 bg-gradient-to-r from-indigo-700 to-violet-500 transition-all">
  <div className='flex items-center ' >
     <img src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png"
   className='h-6 w-auto width="157" height="40" viewBox="0 0 157 40" fill="none"' alt="logo" />
   <span className='tetx-3xl font-medium text-white m-2 '>Brand Logo</span>
  </div>

    <ul class="text-white md:flex hidden items-center gap-10">
            <Link to='/'><li><a href="#" class="text-sm">Home</a></li></Link>
              <Link to='/about'><li><a href="#" class="text-sm">About</a></li></Link>
                <Link to='/products'><li><a href="#" class="text-sm">Products</a></li></Link>
                  <Link to='/contact'><li><a href="#" class="text-sm">Contact</a></li></Link>
          
       
    </ul>

    <button type="button" class="bg-white text-gray-700 md:inline hidden text-sm hover:opacity-90 active:scale-95 transition-all w-40 h-11 rounded-full">
        Get started
    </button>

    <button aria-label="menu-btn" type="button" class="menu-btn inline-block md:hidden active:scale-90 transition">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="#fff">
            <path d="M3 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2zm0 7a1 1 0 1 0 0 2h24a1 1 0 1 0 0-2z"/>
        </svg>
    </button>

    <div class="mobile-menu absolute top-[70px] left-0 w-full bg-gradient-to-r from-indigo-700 to-violet-500 p-6 hidden md:hidden">
     
        <button type="button" class="bg-white text-gray-700 mt-6 inline md:hidden text-sm hover:opacity-90 active:scale-95 transition-all w-40 h-11 rounded-full">
            Get started
        </button>
    </div>
</nav>


     </>
  )
}

export default Navbar