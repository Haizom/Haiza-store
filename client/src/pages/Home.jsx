import React from 'react'
import Navbar from '../components/Navbar'
import Topbar from '../components/Topbar'
import Slider from '../components/Slider'
import CategoriesList from '../components/CategoriesList'
import ProductsList from '../components/ProductsList'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import SectionTitle from '../components/SectionTitle'

export default function Home() {
  return (
    <div>
        <Topbar />
        <Navbar />
        <Slider />
        <SectionTitle title="Categories" color="#fbf" underlineWidth= "160px" />
        <CategoriesList />
        <SectionTitle title="Trending" color="#f5fa" underlineWidth="135px" />
        <ProductsList />
        <Newsletter />
        <Footer />
    </div>
  )
}
