import React from "react";
import { Drawer } from "rsuite";
 import x from '../uploads/close.png'
import '@fortawesome/fontawesome-free/css/all.min.css';
import {  SfIconShoppingCart } from '@storefront-ui/react';
import './components.css'
 

const DrawerBasket = () => {
  const [size, setSize] = React.useState();
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState("right");

  const handleOpen = (value) => {
    setSize(value);
    setOpen(true);
  };

  return (
    <div>
      <a
        style={{ color: "black", marginRight: "3px", textDecoration: "none" }}
        onClick={(e) => {
          e.preventDefault(); // Varsayılan davranışı engeller (sayfa yeniden yüklenmesini)
          handleOpen("xs"); // `handleOpen` fonksiyonunu çağırır
        }}
        href="/login"
        className="header-login-a"
      >   <div   className="">
             <SfIconShoppingCart size="xl" className="text-white"></SfIconShoppingCart>               

     
        </div>
      </a>

      <Drawer
        size={size}
        placement={placement}
        open={open}
        onClose={() => setOpen(false)}
      >
        <Drawer.Header>
          <Drawer.Title>Alış-Veriş Sepetiniz</Drawer.Title>
          <Drawer.Actions></Drawer.Actions>
        </Drawer.Header>
        <Drawer.Body style={{ overflow: 'hidden', padding: 0 }}>
          <div className="basket-body-main">
            <div className="row basket-product-card-main">
              <div className="col-3 d-flex align-items-center">
                <img
                  style={{ width: '160%' }}
                  src="https://www.muratogluhome.com.tr/uploads/image/file/12813/show_e1d5ad82-21f0-4b10-90e0-06c9e00f29cf.webp"
                  alt=""
                />
              </div>
              <div className="col-7 d-flex basket-item-info">
                <div>
                  <p style={{ fontSize: '25px' }}>Ürün İsmi</p>
                  <p>Adet: 1 </p>
                  <p style={{ fontSize: '20px' }}>Fiyat: 1200 ₺</p>
                </div>
              </div>
              <div className="col-1 basket-cancel-icon">
                <img style={{ width: '200%' }} src={x} alt="" />
              </div>
            </div>
            <div className="row basket-product-card-main">
              <div className="col-3 d-flex align-items-center">
                <img
                  style={{ width: '160%' }}
                  src="https://www.muratogluhome.com.tr/uploads/image/file/12813/show_e1d5ad82-21f0-4b10-90e0-06c9e00f29cf.webp"
                  alt=""
                />
              </div>
              <div className="col-7 d-flex basket-item-info">
                <div>
                  <p style={{ fontSize: '25px' }}>Ürün İsmi</p>
                  <p>Adet: 1 </p>
                  <p style={{ fontSize: '20px' }}>Fiyat: 1200 ₺</p>
                </div>
              </div>
              <div className="col-1 basket-cancel-icon">
                <img style={{ width: '200%' }} src={x} alt="" />
              </div>
            </div>
          </div>
          <div className="basket-footer-main">
            <div className="basket-footer-total-price">
              <p className="basket-footer-total-price-title">Toplam:</p>
              <p className="basket-footer-total-price-price" style={{ margin: '0', textAlign: 'right' }}>1.200,00 TL</p>
            </div>
            <div className="w-100">
              <button className="basket-complate-shopping">
                <i style={{ fontSize: '20px', marginRight: '3px' }} class="fa-solid fa-basket-shopping"></i>
                Alışverişi Tamamla
              </button>
            </div>
          </div>
        </Drawer.Body>
      </Drawer>
    </div>
  );
};

export default DrawerBasket;
