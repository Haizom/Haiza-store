import React from 'react'
import Navbar from '../components/Navbar'
import Topbar from '../components/Topbar'
import Slider from '../components/Slider'
import Categories from '../components/Categories'

export default function Home() {
  return (
    <div>
        <Topbar />
        <Navbar />
        <Slider />
        <Categories />
    </div>
  )
}
