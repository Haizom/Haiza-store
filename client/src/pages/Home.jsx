import React from 'react'
import Navbar from '../components/Navbar'
import Topbar from '../components/Topbar'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/ProductsList'

export default function Home() {
  return (
    <div>
        <Topbar />
        <Navbar />
        <Slider />
        <Categories />
        <Products />
    </div>
  )
}
