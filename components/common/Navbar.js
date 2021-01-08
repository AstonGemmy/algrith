import React, {useEffect} from 'react'
import Link from 'next/link'

export default class Header extends React.Component {
    
    constructor() {
        super()
    }

    render() {
        
        return (

            <nav id="nav-menu" className="navlinks transition-all z-50 ease-in-out duration-700 shadow md:shadow-none bg-white fixed top-0 md:top-4 lg:top-16 -right-full md:right-12 flex flex-col md:flex-row justify-between md:justify-end md:items-center w-screen md:w-auto h-screen md:h-12 text-gray-600 lg:p-4 lg:bg-gradient-to-t lg:from-gray-100 lg:via-white lg:rounded-b-full">
                                
                <div className="md:hidden flex flex-grow-0 flex-shrink justify-between content-center mb-2 text-left w-full text-2xl p-4">
                    
                    <h1 className="uppercase flex text-black p-2 font-medium">
                        Algrith
                    </h1>

                    <div id="close-menu" onClick={this.props.event.close_nav_bar} className="flex justify-center h-12 w-12 bg-gray-300 rounded-xl text-xl items-center text-black">
                        <i className="fa fa-times"></i>
                    </div>

                </div>

<div className="flex flex-col md:flex-row flex-grow flex-shrink-0 w-11/12 md:w-full p-2 rounded-xl my-4 lg:my-0 mx-auto">
                <Link href="/about">
                    <a className="my-2 mx-auto md:m-4 p-2 hover:bg-gray-200 text-left md:text-center w-full md:w-auto text-xl text-green-500">About</a>
                </Link>
                <Link href="/contact">
                    <a className="my-2 mx-auto md:m-4 p-2 hover:bg-gray-200 text-left md:text-center w-full md:w-auto text-xl text-green-500">Contact</a>
                </Link>
                <Link href="/support">
                    <a className="my-2 mx-auto md:m-4 p-2 hover:bg-gray-200 text-left md:text-center w-full md:w-auto text-xl text-green-500">Support</a>
                </Link>
</div>

<div className="md:hidden flex justify-between items-center flex-grow-0 flex-shrink relative p-4 w-full bg-gray-200 mt-2">
<div className="inline-flex h-full">Powered by <span className="ml-1 text-green-600"> Algrith</span>
                    <img src="./images/logo/algrith.png" alt="brand logo" className="logo inline-flex" />
</div>

<div className="flex justify-center items-center h-full">
<span className="flex justify-center mx-1 items-center rounded-xl text-gray-600 text-xl h-8 w-8 bg-gray-300">
<i className="fab fa-facebook"></i>
</span>
<span className="flex justify-center mx-1 items-center rounded-xl text-gray-600 text-xl h-8 w-8 bg-gray-300">
<i className="fab fa-twitter"></i>
</span>
<span className="flex justify-center mx-1 items-center rounded-xl text-gray-600 text-xl h-8 w-8 bg-gray-300">
<i className="fab fa-linkedin-square"></i>
</span>
</div>
</div>

            </nav>

        )
    }
}
