import React from 'react'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import { useEffect, useRef, useState } from 'react';
import DetailsThumb from '../components/DetailsThumb'
import productData from '../components/Data';
import Colors from '../components/Color'
const ProductDetials = () => {
  const [index, setIndex] = useState(0);
  const smImgsRef = useRef(null);
  const handleImgChange = (newIndex) =>{
    setIndex(newIndex);
    const images = smImgsRef.current.children;
    // remove all img active class 
    for(let i=0; i<images.length; i++){
      images[i].className = images[i].className.replace("active", "");
    }
    // set current img active class 
    images[newIndex].className = "active";
  };

  // initial img set active class 
  useEffect(()=>{
    smImgsRef.current.children[index].className = "active";
  },[index]);
  return (
    <div>
            <Header></Header>
            <section className='app'>
      {
        productData.map(({_id, title, src, description, content, price, colors}) => (
          <div key={_id} className="details">
            <div className='large-img-wrapper'>
              <img src={src[index]} alt="largeImg" className='large-img'/>
            </div>

            <div className='box'>
              <div className='row'>
                <h2>{title}</h2>
                <span>{price} TL</span>
              </div>
              {/* colors components  */}
              <Colors colors={colors}/>
              <p>{description}</p>
              <p>{content}</p>
              {/* small images components */}
              <DetailsThumb images={src} handleImgChange={handleImgChange} smImgsRef={smImgsRef}/>
              <button className='add-to-cart'>Add to cart</button>
            </div>
          </div>
        ))
      }
    </section>
            <Footer></Footer>

    </div>
  )
}

export default ProductDetials