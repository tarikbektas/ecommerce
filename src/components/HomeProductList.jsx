import React, { useEffect, useState } from 'react';
import './components.css';
import axios from 'axios';
import Card from './ProductCard';

const HomeProductList = () => {
  const [products, setProducts] = useState([]); // Tüm ürünleri tutar
  const [visibleProducts, setVisibleProducts] = useState(12); // Görünen ürün sayısı (3 satır x 4 ürün = 12 ürün)
  const [loading, setLoading] = useState(false); // Yükleme durumu kontrolü

  // API'den ürünleri al
  useEffect(() => {
    setLoading(true);
    axios
      .get('https://fakestoreapi.com/products')
      .then((res) => {
        setProducts(res.data); // API'den gelen ürünleri ayarla
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  // "Daha fazla yükle" butonuna tıklanınca ürün sayısını artır
  const loadMoreProducts = () => {
    setVisibleProducts((prevVisible) => prevVisible + 12); // Bir sonraki 3 satırı (12 ürün) daha göster
  };

  return (
    <div className='card mt-5'>
      <h2>En Çok Satan Ürünler</h2>
      <div className='product-list-main bg-gray-50' style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
        {products.slice(0, visibleProducts).map((item, index) => (
          <Card item={item} key={index} />
        ))}
      </div>

      {/* Eğer hala yüklenebilecek ürün varsa "Daha fazla yükle" butonunu göster */}
      {visibleProducts < products.length && (
        <div className='load-more-container' style={{ textAlign: 'center', marginTop: '20px' }}>
          <button onClick={loadMoreProducts} className='load-more-btn'>
            Daha fazla yükle
          </button>
        </div>
      )}

      {/* Yüklenme durumu */}
      {loading && <p>Ürünler yükleniyor...</p>}
    </div>
  );
};

export default HomeProductList;
