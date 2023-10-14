import React from 'react'
import Navbar from '../components/Navbar'
import Topbar from '../components/Topbar'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/ProductsList'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
        <Topbar />
        <Navbar />
        <Slider />
        <Categories />
        <Products />
        <Newsletter />
        <Footer />
    </div>
  )
}
