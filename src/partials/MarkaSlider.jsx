import React from 'react'
import '../partials/partials.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const MarkaSlider = () => {
    return (
        <div className='mx-5 my-10 bg-gray-50 d-flex' style={{alignItems:'center' ,justifyContent:'center'}} >
            <OwlCarousel className='owl-theme' items="7" loop  dots="false" lazyLoad="true" autoplay="true" autoplayTimeout="2000" nav>
                <div className='item marka-slider-items '>
                    <img className='marka-slider-img' src="https://demo39.ecommerceswebagency.com/images/uploads/brand_home_adid40470587344917.png" alt="" />
                </div>
                <div className='item marka-slider-items'>
                    <img className='marka-slider-img' src="https://demo39.ecommerceswebagency.com/images/uploads/brand_home_adid40470587344917.png" alt="" />
                </div>
                <div className='item marka-slider-items'>
                    <img className='marka-slider-img' src="https://demo39.ecommerceswebagency.com/images/uploads/brand_home_adid40470587344917.png" alt="" />
                </div>
                <div className='item marka-slider-items'>
                    <img className='marka-slider-img' src="https://demo39.ecommerceswebagency.com/images/uploads/brand_home_adid40470587344917.png" alt="" />
                </div>
                <div className='item marka-slider-items'>
                    <img className='marka-slider-img' src="https://demo39.ecommerceswebagency.com/images/uploads/brand_home_adid40470587344917.png" alt="" />
                </div>
                <div className='item marka-slider-items'>
                    <img className='marka-slider-img' src="https://demo39.ecommerceswebagency.com/images/uploads/brand_home_adid40470587344917.png" alt="" />
                </div>
                <div className='item marka-slider-items'>
                    <img className='marka-slider-img' src="https://demo39.ecommerceswebagency.com/images/uploads/brand_home_adid40470587344917.png" alt="" />
                </div>
                <div className='item marka-slider-items'>
                    <img className='marka-slider-img' src="https://demo39.ecommerceswebagency.com/images/uploads/brand_home_adid40470587344917.png" alt="" />
                </div>
                <div className='item marka-slider-items'>
                    <img className='marka-slider-img' src="https://demo39.ecommerceswebagency.com/images/uploads/brand_home_adid40470587344917.png" alt="" />
                </div>
                <div className='item marka-slider-items'>
                    <img className='marka-slider-img' src="https://demo39.ecommerceswebagency.com/images/uploads/brand_home_adid40470587344917.png" alt="" />
                </div>
                 <div className='item marka-slider-items'>
                    <img className='marka-slider-img' src="https://demo39.ecommerceswebagency.com/images/uploads/brand_home_adid40470587344917.png" alt="" />
                </div>
                
            </OwlCarousel>;
        </div>
    )
}

export default MarkaSlider