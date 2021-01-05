import React from 'react'
import Link from 'next/link'
import Meta from '../components/common/Meta'
import Styles from '../components/styles/index/index.module.css'
import Header from '../components/common/Header'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import Intro from '../components/index/Intro'
import About from '../components/index/About'
import Leaders from '../components/index/Leaders'
import Contact from '../components/index/Contact'

export default class Index extends React.Component {
  
    constructor() {
        super()
        this.handleScroll = this.handleScroll.bind(this)
    }

    componentDidMount() {
        this.nav_menu = document.querySelector('#nav-menu')
        this.overlay = document.querySelector('#overlay')
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
                this.header.style.transform = 'scale(1, 0.7)'
                this.header.style.transformOrigin = 'top'
                // this.brandTitle.classList.remove('text-5xl')
                // this.brandTitle.classList.add('text-2xl')
                // this.brandTitle.classList.remove('p-4')
                // this.brandTitle.classList.add('p-1')
                // this.hamburger.classList.remove('p-4')
                // this.hamburger.classList.add('p-1')
                // this.hamburger.classList.remove('text-3xl')
                // this.hamburger.classList.add('text-2xl')
                // this.hamburger.classList.remove('mt-1')
                // this.hamburger.classList.add('mt-0')
                // this.brand.classList.remove('md:mt-4')
                // this.brand.classList.add('md:mt-0')
                this.nav_menu.classList.remove('md:top-4')
                this.nav_menu.classList.add('md:top-1')
                // this.nav_menu.classList.remove('md:mt-4')
                // this.nav_menu.classList.add('md:mt-1')
            } else {
                this.header.style.transform = 'scale(1)'
                // this.brandTitle.classList.remove('text-2xl')
                // this.brandTitle.classList.add('text-5xl')
                // this.brandTitle.classList.remove('p-1')
                // this.brandTitle.classList.add('p-4')
                // this.hamburger.classList.remove('p-1')
                // this.hamburger.classList.add('p-4')
                // this.hamburger.classList.remove('text-2xl')
                // this.hamburger.classList.add('text-3xl')
                // this.hamburger.classList.remove('mt-0')
                // this.hamburger.classList.add('mt-1')
                // this.brand.classList.remove('md:mt-0')
                // this.brand.classList.add('md:mt-4')
                this.nav_menu.classList.remove('md:top-1')
                this.nav_menu.classList.add('md:top-4')
                // this.nav_menu.classList.remove('md:mt-1')
                // this.nav_menu.classList.add('md:mt-4')
            }

        }
    }

    render() {

        const open_nav_bar = () => {
            if (this.nav_menu !== undefined) {
                if (this.nav_menu.className.includes('-right-full')) {
                    this.nav_menu.classList.remove('-right-full')
                    this.nav_menu.classList.add('right-0')
                    this.overlay.classList.remove('hidden')
                    this.overlay.classList.add('block')
                } else {
                    this.nav_menu.classList.remove('right-0')
                    this.nav_menu.classList.add('-right-full')
                    this.overlay.classList.remove('block')
                    this.overlay.classList.add('hidden')
                }
            }
        }

        const close_nav_bar = () => {
            if (this.nav_menu !== undefined) {
                if (this.nav_menu.className.includes('right-0')) {
                    this.nav_menu.classList.remove('right-0')
                    this.nav_menu.classList.add('-right-full')
                    this.overlay.classList.remove('block')
                    this.overlay.classList.add('hidden')
                } else {
                    this.nav_menu.classList.remove('-right-full')
                    this.nav_menu.classList.add('right-0')
                    this.overlay.classList.remove('hidden')
                    this.overlay.classList.add('block')
                }
            }
        }

        const close_all = () => {
            close_nav_bar()
        }
        
        return (
        
            <div className="">
              
                <Meta />

                <Header event={{open_nav_bar}} />

                <Navbar event={{close_nav_bar}} />
                
                <main>

                    <Intro />

                    <About />

                    <Leaders />

                    <Contact />                    
                
                </main>

                <Footer />
                
                <div id="overlay" onClick={close_all} className="fixed hidden top-0 left-0 z-20 bg-black opacity-50 h-screen w-screen"></div>

            </div>
    
        )
    
    }

}
