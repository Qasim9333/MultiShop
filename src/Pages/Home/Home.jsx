import React from 'react'
import Carousel from '../../Components/Carousel/Carousel'
import Featured from '../../Components/Featured/Featured'
import Categories from '../../Components/Categories/Categories'
import Products from '../../Components/Products/Products'
import Offer from '../../Components/Offer/Offer'
import Products2 from '../../Components/Products2/Products2'
import Vendor from '../../Components/Vendor/Vendor'

const Home = () => {
  return (
    <div>
      <Carousel/>
      <Featured/>
      <Categories/>
      <Products/>
      <Offer/>
      <Products2/>
      <Vendor/>
    </div>
  )
}

export default Home