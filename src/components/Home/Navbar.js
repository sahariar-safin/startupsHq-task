import React from 'react'
import { Link } from 'react-router-dom'
import '../../style/Home.css'

function Navbar() {
    return (
        <nav class="pt-4 pb-4 shadow-lg md:flex md:items-center md:justify-around">
            <div class="flex items-center justify-between">
                <div class="cursor-pointer hover:text-gray-700 font-bold text-xl text-gray-800 md:text-3xl">
                    <Link to="/">
                        Navbar
                    </Link>
                </div>
                <div id="toggleOpen" class="cursor-pointer md:hidden">
                    <svg viewBox="0 0 20 20" fill="currentColor" class="menu w-8 h-8 fill-current text-gray-800"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                </div>
                <div id="toggleClose" class="cursor-pointer hidden md:hidden">
                    <svg viewBox="0 0 20 20" fill="currentColor" class="x w-8 h-8 fill-current text-gray-800"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </div>
            </div>
            <div id="navLink" class="flex flex-col hidden md:block space-y-2 md:flex-row md:space-y-0 transition-all ease-in duration-300">

            </div>
            <div class="hidden md:block">
                <a href="#" class="mt-4 text-gray-700 font-semibold rounded px-1 hover:bg-gray-300 md:mt-0 md:px-2 lg:px-3 lg:mx-1 md:text-lg md:py-1">Home</a>

            </div>
        </nav>
    )
}

export default Navbar
