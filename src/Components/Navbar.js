import React, { useState } from 'react'
import logo from '../Images/logo.png';

export const Navbar = () => {
    const [menuvisb, setmenuvisb] = useState(true)
    const cancelClicked = () => {
        setmenuvisb(true)
    }
    const menuClicked = () => {
        setmenuvisb(false)
    }

    return (
        <div className="navbar">
            <header className="body-font bg-gray-800">
                <div className="nav1 grid grid-cols-7  mx-3">
                    <a className="flex title-font font-medium items-center text-gray-900"><img className="w-40" src={logo} /></a>
                    <a className="mt-4 hover:text-gray-500 text-sm">THE ED CRISIS</a>
                    <a className="mt-4 hover:text-gray-500 text-sm">OUR STORY</a>
                    <a className="mt-4 hover:text-gray-500 text-sm">WHAT WE DO</a>
                    <a className="mt-4 hover:text-gray-500 text-sm">OUR IMPACT</a>
                    <a className="mt-4 hover:text-gray-500 text-sm">JOIN THE MOVEMENT</a>
                    <a className="mt-4 hover:text-gray-500 text-sm pl-10">DONATE</a>
                </div>
                <a className="nav-logo flex title-font font-medium items-center text-gray-900"><img className="w-40" src={logo} /></a>
                <div className="nav2 flex  justify-center w-full py-4 ">
                    <div className="grid grid-cols-3 gap-8">
                        <div className="a hover:text-gray-500">APPLY</div>
                        <div className="a hover:text-gray-500">DONATE</div>
                        <div className="a hover:text-gray-500" onClick={menuClicked} >MENU</div>
                    </div>
                </div>
            </header>
            <div className="modal-bg" style={menuvisb ? { display: 'none' } : {}}>
                <div className="modal-box">
                    <div className="modal-inner">
                        <div className="modal-close px-4 py-2"><i className="fa fa-times" onClick={cancelClicked}></i></div>
                        <div className="menu-links flex flex-col mx-12">
                            <a className="mt-4 hover:text-gray-500 text-lg">THE ED CRISIS</a>
                            <a className="mt-4 hover:text-gray-500 text-lg dropdown relative dropdown-toggle">OUR STORY</a>
                            <a className="mt-4 hover:text-gray-500 text-lg">WHAT WE DO</a>
                            <a className="mt-4 hover:text-gray-500 text-lg">OUR IMPACT</a>
                            <a className="mt-4 hover:text-gray-500 text-lg">JOIN THE MOVEMENT</a>
                            <a className="mt-4 hover:text-gray-500 text-lg">DONATE</a>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}