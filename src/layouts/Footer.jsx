import React from 'react'
import logo from '../uploads/logo.png'
const Footer = () => {
  return (
    <div>
      <div className=' footer-main ' style={{ height: '400px' }}>
        <div className="  footer-items-main " style={{ paddingLeft: '5%', display: 'block' }}>
          <div className='d-flex'>
            <img className='w-2' src={logo} alt="logo" />
            <p className='footer-short-desc' >WTB E-Ticaret</p>
          </div>
          <div className='w-75 mt-4'>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis modi, corporis, atque voluptatem beatae officiis sit vitae eum nihil similique qui, nulla veniam tempore animi provident ab. Expedita, consectetur velit!</p>
          </div>
        </div>
        <div className="footer-items-main row" style={{ display: 'flex' }}>
          <div className='col-6 footer-column'>
            <h5>Alışveriş Bilgileri</h5>
            <ul className='footer-ul'>
              <a href="/"><li>Siparişlerim</li></a>
              <a href="/"><li>Sipariş Durumu</li></a>
              <a href="/"><li>Favorilerim</li></a>
              <a href="/"><li>Kargo Takip</li></a>
              <a href="/"><li>Hesabım</li></a>
            </ul>
          </div>
          <div className='col-6 footer-column'>
            <h5>Bilgi & Destek</h5>
            <ul className='footer-ul'>
              <a href="/"><li>Teslimat Koşulları</li></a>
              <a href="/"><li>İptal-İade-Değişim</li></a>
              <a href="/"><li>Satış Politikası</li></a>
              <a href="/"><li>Gizlilik ve Güvenlik</li></a>
              <a href="/"><li>KVKK</li></a>
              <a href="/"><li>Kullanım Koşulları</li></a>
            </ul>
          </div>
        </div>

        <div className=" footer-items-contact" style={{ flexDirection: 'column' }}>
          <h5>İletişim</h5>
          <ul style={{ width: '79%' }} className='footer-ul'>
            <li><i class="fa-solid fa-house mx-1" style={{ fontSize: '20px' }}></i> Mevlana Mahallesi Bakırpınar Sokak Bafra/Samsun</li>
            <li><i class="fa-brands fa-whatsapp mx-1" style={{ fontSize: '20px' }}></i> 0512 412 2352
            </li>
            <li> <i class="fa-solid fa-phone mx-1" style={{ fontSize: '20px' }}></i> +90544 658 7465</li>
            <li> <i class="fa-regular fa-envelope mx-1  " style={{ fontSize: '20px' }}></i> admin@help.com</li>
          </ul>

        </div>


      </div>
      <div className="footer-bottom">
        © 2024 WTB Bilişim Tüm Hakları Saklıdır
      </div>
    </div>

  )
}

export default Footer