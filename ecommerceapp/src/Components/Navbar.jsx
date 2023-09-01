import React from 'react';
import "../Components/Navbar.css";
import { Link, NavLink } from "react-router-dom";

import { faUser, faHeart, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import SliderShow from "./SliderShow.jsx";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCalendarCheck,
  faSearch,
  faClose,
  faCoins,
  faHomeAlt,
  faLocationDot,
  faStore,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        <div className='wholepart'>
            <div className='top' style={{textAlign: "center", color: "white"}}>
                <p>
                    CaratLane - A Tanishq Partnership
                </p>
            </div>
            <nav className='main-nav'>
              <div className='firstDiv'>
                <div className='logo'>
                    <h2>
                        <a href='/'>
                            <img src='https://hindubabynames.info/wp-content/themes/hbn_download/download/clothing-and-accessories-companies/caratlane-logo.png' alt='logo_image' width={150}></img>
                        </a>
                    </h2>
                </div>

        <div className="afterlogo" id="navbar" style={{ marginTop: "10px" }}>
          <ul>
            <li style={{ fontSize: "14px" }}>
              <NavLink to="/">
                <a href="/" className="active">
                  <FontAwesomeIcon icon={faHomeAlt} />
                  {/* < AiFillHome/> */}
                  &nbsp; FREE TRY AT HOME
                </a>
              </NavLink>
            </li>
            <li style={{ fontSize: "14px" }}>
              <NavLink to="/">
                <a href="/">
                  <FontAwesomeIcon icon={faStore} />
                  {/* <FaStore/> */}
                  &nbsp; FIND STORE
                </a>
              </NavLink>
            </li>
            <li style={{ fontSize: "14px" }}>
              <NavLink to="/">
                <a href="/">
                  <FontAwesomeIcon icon={faCalendarCheck} />
                  {/* <SlCalender/> */}
                  &nbsp; PLAN OF PURCHASE
                </a>
              </NavLink>
            </li>
            <li style={{ fontSize: "14px" }}>
              <NavLink to="/">
                <a href="/">
                  <FontAwesomeIcon icon={faCoins} />
                  {/* <FaCoins/> */}
                  &nbsp; BUY DIGITAL GOLD
                </a>
              </NavLink>
            </li>
            <li style={{ fontSize: "12px" }} className="input">
            <div className="search-bar">
                    <input type="text" placeholder="Search..." />
                    <FontAwesomeIcon icon={faSearch} className="search-icon" />
            </div>
            </li>
            <li style={{ fontSize: "14px" }}>
              <NavLink to="/">
                <a href="/">
                <FontAwesomeIcon icon={faLocationDot} className="location-icon" />
                  &nbsp; PINCODE
                </a>
              </NavLink>
            </li>

            <li style={{ paddingLeft: "15px" }}>
              <img src="https://static.vecteezy.com/system/resources/previews/022/111/809/original/india-flag-round-shape-png.png" alt='indian-flag-icon' width={23} />
            </li>
            <li style={{ paddingLeft: "25px" }}>
              <FontAwesomeIcon icon={faUser} className="person-icon" />
            </li>
            <li style={{ paddingLeft: "25px" }}>
              <FontAwesomeIcon icon={faHeart} className="heart-icon" />
            </li>
            <li style={{ paddingLeft: "25px" }}>
              <FontAwesomeIcon icon={faCartPlus} className="cart-icon" />
            </li>
          </ul>
        </div>
        </div>
        </nav>


        {/* 2nd div */}
        <div className='secondDiv'>
        <ul id="navbar1">
        <li>
            <Link to="/product">BEST SELLERS</Link>
          </li>
          <li>
            <Link to="/product" style={{color: "blue"}}>NEW ARRIVALS</Link>
          </li>
          <li>
            <Link to="/product">RINGS</Link>
          </li>
          <li>
            <Link to="/product">EARRINGS</Link>
          </li>
          <li>
            <Link to="/product">BRACELETS & BANGLES</Link>
          </li>
          <li>
            <Link to="/product">SOLITARIES</Link>
          </li>
          <li>
            <Link to="/product" style={{color: "blue"}}>SPECIAL DEALS</Link>
          </li>
          <li>
            <Link to="/product">OTHERS JEWELLERY</Link>
          </li>
          <li>
            <Link to="/product">GIFTING</Link>
          </li>
        </ul>
      </div>

      <div>
        <SliderShow></SliderShow>
      </div>
    </div>
    )
}

export default Navbar;