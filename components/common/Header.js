import React, {useEffect} from 'react'
import Link from 'next/link'

export default class Header extends React.Component {
    
    constructor() {
        super()
        this.handleScroll = this.handleScroll.bind(this)
    }

    componentDidMount() {
        this.header = document.querySelector('header');
        this.brand = document.querySelector('#brand');
        this.brandTitle = document.querySelector('#brand-title');
        this.hamburger = document.querySelector('#hamburger');
        window.addEventListener('scroll', this.handleScroll, false)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll, false)
    }

    handleScroll() {
        // When the user scrolls down 200px from the top of the document, resize the navbar's padding and the logo's font size
        if (this.header !== undefined) {
            if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                this.brandTitle.classList.remove('text-5xl')
                this.brandTitle.classList.add('text-2xl')
                this.brandTitle.classList.remove('p-4')
                this.brandTitle.classList.add('p-1')
                this.hamburger.classList.remove('p-4')
                this.hamburger.classList.add('p-1')
                this.hamburger.classList.remove('text-3xl')
                this.hamburger.classList.add('text-2xl')
                this.hamburger.classList.remove('mt-1')
                this.hamburger.classList.add('mt-0')
                this.brand.classList.remove('md:mt-4')
                this.brand.classList.add('md:mt-0')
                this.header.classList.remove('p-4')
                this.header.classList.add('p-0')
            } else {
                this.brandTitle.classList.remove('text-2xl')
                this.brandTitle.classList.add('text-5xl')
                this.brandTitle.classList.remove('p-1')
                this.brandTitle.classList.add('p-4')
                this.hamburger.classList.remove('p-1')
                this.hamburger.classList.add('p-4')
                this.hamburger.classList.remove('text-2xl')
                this.hamburger.classList.add('text-3xl')
                this.hamburger.classList.remove('mt-0')
                this.hamburger.classList.add('mt-1')
                this.brand.classList.remove('md:mt-0')
                this.brand.classList.add('md:mt-4')
                this.header.classList.remove('p-0')
                this.header.classList.add('p-4')
            }
        }
    }


    render() {

        return (

            <header className="flex sticky top-0 z-20 justify-between items-center bg-green-300 p-4 w-full dark:bg-black">
                
                {/* <div className="w-16 ml-4 lg:ml-64 md:mt-4 mt-1">
                    <img src="./images/logo/algrith.png" alt="brand-logo" />
                </div> */}
                <div id="brand" className="ml-4 lg:ml-32 md:mt-4 mt-0">
                    <a href="/">
                        <h1 id="brand-title" className="uppercase hover:bg-green-400 p-4 rounded-full text-5xl text-yellow-100 mx-auto w-full text-center font-medium">
                            Algrith
                        </h1>
                    </a>
                </div>
                
                <div id="hamburger" onClick={this.props.event.open_nav_bar} className="md:hidden flex justify-center items-center text-3xl cursor-pointer p-4 ml-4 mr-4 mt-1 bg-green-500 text-white">
                    <i className="fa fa-bars"></i>
                </div>

            </header>

        )
    }
}
