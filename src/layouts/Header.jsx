import React from "react";
import "./layout.css";
import logo from '../uploads/logo.png'
import sell from '../uploads/sell.png'
import phone from '../uploads/telephone.png'
import email from '../uploads/email.png'
import location from '../uploads/location.png'
import instagram from '../uploads/social.png'
import youtube from '../uploads/video.png'
import twitter from '../uploads/twitter.png'
import facebook from '../uploads/facebook.png'
import Menu from "../partials/Menu";
import SearchBox from "../components/SearchBox";




const Header = () => {

  return (
    <div>
      <div className="header-main">
        <div className="logo-main">
          <img
            className="logo"
            alt="logo"
            src={logo}
          ></img>
        </div>
        <div className="header-right">
          <div className=" d-flex align-items-center h-50 ">
            <div className=" w-25 flex-grow-1 headar-right-top-right-area d-flex align-items-center">
              <img className="header-right-top-left-bar-img " src={sell} alt="" />
              <p className="header-right-top-left-bar-text  ">Kalitenin Tek Adresi</p>
            </div>
            <div className="w-75 headar-right-top-right-area-main d-flex align-items-center">
              <div className="w-25 header-info-area d-flex align-items-center">
                <img src={phone} alt="" />
                <div className="header-info-area-main">
                  <p className="header-info-area-title">Yardım Hattı</p>
                  <p className="d-flex header-info-area-text " >
                    +90123123123
                  </p>
                </div>

              </div>
 
              <div className="w-25 header-info-area d-flex align-items-center">
                <img  src={email} alt="" />
                <div  className="header-info-area-main">
                <p className="header-info-area-title">E-posta</p>
                <p className="d-flex header-info-area-text " >
                  test@admin.net
                </p>
                </div>
               
              </div>
              <div className="w-25 header-info-area d-flex align-items-center">
                <img  src={location} alt="" />
                <div className="header-info-area-main">
                <p className="header-info-area-title">Yardım Hattı</p>
                <p className="d-flex header-info-area-text " >
                  Samsun/Türkiye
                </p>
                </div>
               
              </div>


            </div>
            <div className="header-social-media-area w-25">
              <div className="social-media-item">
                <a href="https://google.com" className="header-social-media-a">
                  <img className="header-social-media-logo" src={instagram} alt="" />
                </a>
              </div>
              <div className="social-media-item">
                <a href="https://google.com" className="header-social-media-a">
                  <img className="header-social-media-logo" src={youtube} alt="" />
                </a>
              </div>
              <div className="social-media-item">
                <a href="https://google.com" className="header-social-media-a">
                  <img className="header-social-media-logo" src={facebook} alt="" />
                </a>
              </div>
              <div className="social-media-item">
                <a href="https://google.com" className="header-social-media-a">
                  <img className="header-social-media-logo" src={twitter} alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="w-100 header-right-bottom d-flex align-items-center h-50"  >
           <div className="header-menu-main d-flex">
            <Menu categoryName="Giyim & Ayakkabı"></Menu>
            <Menu categoryName="Elektronik"></Menu>
            <Menu categoryName="Ev & Yaşam"></Menu>
            <Menu categoryName="Kişisel Bakım"></Menu>
            <Menu categoryName="Spor & Outdoor"></Menu>
            <Menu categoryName="Emlak"></Menu>
            </div>
            <div className="d-flex">
            <div className="header-search-box">
              <SearchBox></SearchBox>
            </div>
            <div className="header-basket">
              logo
            </div>
            <div className="header-login">
              login
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Header;
