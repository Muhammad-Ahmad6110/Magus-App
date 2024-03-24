import React from 'react'
import Mrketplce from "./Imgs/Mrketplce.png";

import "./Home.css";

import NavAbout from "./Imgs/Nav/aboutN.png";
import NavMagusMap from "./Imgs/Nav/MagusMap.png";
import NavFAQ from "./Imgs/Nav/FAQ.png";
import NavTEAM from "./Imgs/Nav/TEAM.png";
import NavStaking from "./Imgs/Nav/Staking.png";
import NavMarketplace from "./Imgs/Nav/Marketplace.png";
import NavMint from "./Imgs/Nav/Mint.png";

import Opensea from "./Imgs/Nav/Opensea.svg";

import Connect from "./Imgs/Conect wallet.png";

import Logo from "../Components/Imgs/Nav/Logo.png";

export default function MarketPlace() {
  return (
    <div>
         <div className="Staking">
         <nav class="navbar pt-3 d-none d-lg-flex navbar-expand-lg navbar-light align-items-center">
            <div class="navbar-brand p-0">
              <i
                style={{ cursor: "pointer" }}
                class="fa-brands ico mx-2 fa-discord"
              ></i>
              <i
                style={{ cursor: "pointer" }}
                class="fa-brands ico mx-2 fa-twitter"
              ></i>
              <img
                style={{ cursor: "pointer" }}
                className="mx-2 opensea"
                src={Opensea}
              ></img>
            </div>
            
            <div class="collapse navbar-collapse" >
              <ul class="navbar-nav mx-auto NavLeft py-5 px-5">
                <li class="nav-item active">
                  <a class="nav-link ml-lg-" href="#about">
                    {/* <img src={NavAbout}></img> */}
                    <h3>About</h3>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link ml-lg-4" href="#magusmap">
                    {/* <img src={NavMagusMap}></img> */}
                    <h3>MagusMap</h3>
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link ml-lg-4" href="#faq">
                    {/* <img src={NavFAQ}></img> */}
                    <h3>FAQ</h3>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link ml-lg-4 disabled" href="#team">
                    {/* <img src={NavTEAM}></img> */}
                    <h3>Team</h3>
                  </a>
                </li>
              </ul>
              <img className="LogoNav" src={Logo}></img>
                {/* <li class="nav-item">
                  <a class="nav-link ml-lg-4 " href="/">
                    <img className="w-100" src={Logo}></img>
                  </a>
                </li> */}
              <ul class="navbar-nav mx-auto NavRit py-5 px-4">
                <li class="nav-item">
                  <a class="nav-link ml-lg-4 disabled" href="/staking" target={"_blank"}>
                    {/* <img src={NavStaking}></img> */}
                    <h3>Staking</h3>
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link ml-lg-4 disabled"
                    href="/marketplace"
                    target={"_blank"}
                    >
                    {/* <img src={NavMarketplace}></img> */}
                      <h3>Marketplace</h3>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link ml-lg-4 disabled" href="#mint">
                    {/* <img src={NavMint}></img> */}
                      <h3>Mint</h3>
                  </a>
                </li>
              </ul>

              <img
                style={{ cursor: "pointer" }}
                className="connectbtn ml-1"
                src={Connect}
              ></img>
            </div>
          </nav>
          <nav class="navbar pt-3 d-flex d-lg-none navbar-expand-lg navbar-light align-items-center">
            <div class="navbar-brand p-0">
              <i
                style={{ cursor: "pointer" }}
                class="fa-brands ico mx-2 fa-discord"
              ></i>
              <i
                style={{ cursor: "pointer" }}
                class="fa-brands ico mx-2 fa-twitter"
              ></i>
              <img
                style={{ cursor: "pointer" }}
                className="mx-2 opensea"
                src={Opensea}
              ></img>
            </div>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mx-auto">
                <li class="nav-item active">
                  <a class="nav-link ml-lg-4" href="#about">
                    <img src={NavAbout}></img>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link ml-lg-4" href="#magusmap">
                    <img src={NavMagusMap}></img>
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link ml-lg-4" href="#faq">
                    <img src={NavFAQ}></img>
                  </a>
                </li>
            
                <li class="nav-item">
                  <a class="nav-link ml-lg-4 disabled" href="#team">
                    <img src={NavTEAM}></img>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link ml-lg-4 disabled" href="/staking" target={"_blank"}>
                    <img src={NavStaking}></img>
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link ml-lg-4 disabled"
                    href="/marketplace"
                    target={"_blank"}
                  >
                    <img src={NavMarketplace}></img>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link ml-lg-4 disabled" href="#mint">
                    <img src={NavMint}></img>
                  </a>
                </li>
              </ul>

              <img
                style={{ cursor: "pointer" }}
                className="connectbtn"
                src={Connect}
              ></img>
            </div>
          </nav>
          {/* <h1 className="marketplace text-center text-blue display-2">Market Place</h1> */}
          <img className="w-100" src={Mrketplce}></img>
        </div>
    </div>
  )
}
