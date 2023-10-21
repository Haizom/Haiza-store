import React from 'react'
import Slider from '../components/Slider'
import CategoriesList from '../components/CategoriesList'
import ProductsList from '../components/ProductsList'
import Newsletter from '../components/Newsletter'
import SectionTitle from '../components/SectionTitle'
import Layout from '../components/Layout';

export default function Home() {
  return (
    <div>
        <Layout>
          <Slider />
          <SectionTitle title="Categories" color="#fbf" underlineWidth= "160px" />
          <CategoriesList />
          <SectionTitle title="Trending" color="#f5fa" underlineWidth="135px" />
          <ProductsList />
          <Newsletter />
        </Layout>
    </div>
  )
}
