import React from 'react'
import { NavBar, Hero, Features, Feature, NewsLetter, Blog, Footer } from '../../components'

export default function LandingPage() {
    return (
        <div className='p-0 m-0 z-50'>
            <NavBar />
            <Hero />
            <Feature />
            <Features />
            <Blog />
            <NewsLetter />
            <Footer />
        </div>

    )
}
