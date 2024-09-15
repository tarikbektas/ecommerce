import React, { useState, useEffect } from "react";
import './components.css'
import { Link } from "react-router-dom";

const Cart = ({ item }) => {
 /*  const [loading, setLoading] = useState(true); // Yüklenme durumunu takip etmek için state
  useEffect(() => {
    // Simülasyon amaçlı yüklenmeyi geciktirmek için setTimeout kullanıyoruz
    setTimeout(() => {
      setLoading(false); // Ürünler yüklendiğinde loading false olur
    }, 10); // Burada gecikme süresini ayarlayabilirsiniz
  }, []);

  if (loading) {
    // Yüklenme sırasında gösterilecek loader
    return <div className="loader">Yükleniyor...</div>;
  } */

  if (!item || item.length === 0) {
    return <p></p>;
  }

  return (
    <div>
      <Link to={`product-detials`}>
        <div className="cont">
          <div className="product-card">
            <div className="product-card__image"> 
              <img
                style={{objectFit:'contain'}}
                src={item.image}
                alt={item.title}
              />
            </div>
            <div className="product-card__info">
              <h2 className="product-card__title">{item.title}</h2>
              <p className="product-card__description">
                Ürün Açıklaması
              </p>
              <div className="product-card__price-row">
                <span className="product-card__price">{item.price} TL</span>
                <button className="product-card__btn">Sepete Ekle</button>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Cart;
