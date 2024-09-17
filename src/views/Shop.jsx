import React, { useEffect, useState } from 'react'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import ProductFilter from '../partials/ProductFilter'
import axios from 'axios'
import Card from '../components/ProductCard'
import '../partials/partials.css'
const Shop = () => {
    const [products, setProducts] = useState([]); // Tüm ürünleri tutar
    useEffect(() => {
         axios
          .get('https://fakestoreapi.com/products')
          .then((res) => {
            setProducts(res.data); // API'den gelen ürünleri ayarla
           })
          .catch((err) => {
            console.error(err);
           });
      }, []);
  return (
    <div>
        <Header></Header>
        <div className='row container'>
            <div className="col-4"><ProductFilter></ProductFilter></div>
            <div className="col-8 shop-product-list" >
            {products.slice(0).map((item, index) => (
          <Card item={item} key={index} />
        ))}
            </div>
        </div>
        <Footer></Footer>

    </div>
  )
}

export default Shop