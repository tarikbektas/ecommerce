import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCart from './ProductCard'
const ProductSlider = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => {
        setProducts(res.data);
      });
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div>
      <Carousel responsive={responsive} centerMode={true}>
        {products.map((item, index) => (
          <ProductCart item={item} key={index} />
        ))}
      </Carousel>
    </div>
  );
};

const Cart = ({ item }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", width: "100%" }}>
      <img
        src={item.images}
        alt={item.title}
        style={{ width: "100%", height: "200px", objectFit: "cover" }}
      />
      <h2>{item.title}</h2>
      <p>Fiyat: ${item.price}</p>
      <p>{item.description}</p>
    </div>
  );
};

export default ProductSlider;
