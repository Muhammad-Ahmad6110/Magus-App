import React from "react";
import "./MainHEader.css";
import $ from "jquery";
// import $ from 'jquery';

import Logo from "../Imgs/Nav/Logo.png";

export default function MainHeader() {
  return (
    <>
      <nav class="navigation-bar d-none d-md-block  is-visible " data-nav-status="toggle">
        <ul className="text-center">
          <li>
            <a href="#home " className="NavTxtLeft">HOME</a>
          </li>
          <li>
            <a href="#intro" className="NavTxtLeft">What is WoO?</a>
          </li>

          <li>
            <a href="#benefits" className="NavTxtLeft">Claim Body</a>
          </li>
          <li>
            <a href="#faq" className="NavTxtLeft">FAQ</a>
          </li>
          <span className="h3"> 
            <img className="logoimg mx-3" style={{maxWidth :"300px"}} src={Logo}></img>
          </span>
          {/* <div> */}
            <li>
              <a href="#roadmap" className="NavTxtRight">Mint Outfit</a>
            </li>

            <li>
              <a href="#goals" className="NavTxtRight">Mission+ Future</a>
            </li>
            <li>
              <a href="#team" className="NavTxtRight">Allstar Team</a>
            </li>
          {/* </div> */}
        </ul>
      </nav>
    </>
    
  );
  }

