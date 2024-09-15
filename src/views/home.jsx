import React from 'react'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import ImageSlider from '../partials/ImageSlider'
 import MarkaSlider from '../partials/MarkaSlider';
import HomeBanner from '../partials/HomeBanner';
import ProductTabs from '../components/ProductTabs';
import ProductCard from '../components/ProductCard';
import HomeSingleBanners from '../partials/HomeSingleBanners';
import HomeProductList from '../components/HomeProductList';
 
const home = () => {
   
  
  return (
    <div >
      <Header></Header>
        <div className='container'>
       <ImageSlider></ImageSlider>
      <MarkaSlider></MarkaSlider>
      <ProductTabs></ProductTabs>
      <ProductCard></ProductCard>
      <HomeSingleBanners></HomeSingleBanners>
      <HomeBanner>  </HomeBanner>
      <HomeProductList></HomeProductList>

       </div>
    <Footer></Footer>
    </div>
  )
}

export default home