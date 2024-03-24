import React from "react";
import "./Home.css";

import AboutTxt from "./Imgs/About.png";

import AboutPra from "./Imgs/yun.png";
import sketch from "./Imgs/sketch.png";

import hana from "./Imgs/hana.png";
import hanat from "./Imgs/HanaTxt.png";

import ifrit from "./Imgs/ifrit.png";
import ifritt from "./Imgs/ifritt.png";

import Levina from "./Imgs/Levina.png";
import Levinat from "./Imgs/Levinat.png";

import mata from "./Imgs/mata.png";
import matat from "./Imgs/MataTxt.png";

import ray from "./Imgs/ray.png";
import rayt from "./Imgs/RayTxt.png";

import Mrketplce from "./Imgs/Mrketplce.png";

import Gem1 from "./Imgs/Gem 1.png";
import Gem2 from "./Imgs/Gem 2.png";
import Gem3 from "./Imgs/Gem 3.png";
import Gem4 from "./Imgs/Gem 4.png";
import Gem5 from "./Imgs/Gem 5.png";
import Gem6 from "./Imgs/Gem 6.png";

import Traits from "./Imgs/Traits.png";
import traitImg from "./Imgs/trait.png";
import TImg1 from "./Imgs/New folder/T1.png";
import TImg2 from "./Imgs/New folder/T2.png";
import TImg3 from "./Imgs/New folder/T3.png";
import TImg4 from "./Imgs/New folder/T4.png";
import TImg5 from "./Imgs/New folder/T5.png";
import TImg6 from "./Imgs/New folder/T6.png";

import RoadMap from "./Imgs/RD.png";

import FaqTxt from "./Imgs/FAQ.png";

import TeamTxt from "./Imgs/TEAM.png";
import T1 from "./Imgs/T1.png";
import T2 from "./Imgs/T2.png";
import T3 from "./Imgs/T3.png";
import T4 from "./Imgs/T4.png";

import NavAbout from "./Imgs/Nav/aboutN.png";
import NavMagusMap from "./Imgs/Nav/MagusMap.png";
import NavFAQ from "./Imgs/Nav/FAQ.png";
import NavTEAM from "./Imgs/Nav/TEAM.png";
import NavStaking from "./Imgs/Nav/Staking.png";
import NavMarketplace from "./Imgs/Nav/Marketplace.png";
import NavMint from "./Imgs/Nav/Mint.png";

import Opensea from "./Imgs/Nav/Opensea.svg";

import Connect from "./Imgs/Conect wallet.png";
import { useState } from "react";

import Logo from "../Components/Imgs/Nav/Logo.png";
import Nav from "./Imgs/Nav/MainNav.png";

export default function Home() {
  return (
    <>
      <div className="Sara">
        <div className="Top ">
          {/* <img className="w-75 d-block mx-auto" src={Nav}></img> */}
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

            <div class=" collapse navbar-collapse">
              <ul class=" navbar-nav mx-auto NavLeft py-5 px-5">
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
                  <a
                    class="nav-link ml-lg-4 disabled"
                    href="/staking"
                    target={"_blank"}
                  >
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
            </div>
            <img
              style={{ cursor: "pointer" }}
              className="connectbtn ml-1"
              src={Connect}
            ></img>
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
                  <a
                    class="nav-link ml-lg-4 disabled"
                    href="/staking"
                    target={"_blank"}
                  >
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
        </div>
        <a id="about"></a>
        <div className="container-fluid AboutDiv">
          <div className="container">
            <img className="d-block mx-auto py-5 Himgs" src={AboutTxt}></img>
            <p className="text-blue text-center MagicOwl pb-5">
              A tale, luminous and indefinite, starts with its magic not yet
              flourished. Begins in a world that swiftly turns to another.
              Favorable accidents are never predictable, so it was the case with
              those stumbling upon a world covered with the scent of a
              deliberate, mundane, worldly essence that held its secrets, up
              until now.
              <br />
              A wrinkled man with a hunchback posture, cloaked in a ragged
              outfit, wanders the woods to search for those with destinies, not
              yet fulfilled. It was six of these individuals that proved to be
              most worthy of his mysterious gift. A gift that cannot be kept,
              yet it manifests in the ones who accept it. The gateway to another
              world, The Magus, the World of Magic.
              <br />
              A world of magic, requires order to maintain the possible chaos,
              always lurking in the shadows to grasp onto a pure soul, to break
              the harmony. The idea of power, sheds light to one’s true
              intentions, or maybe to so far hidden emotions growing inside.
              <br />
              To keep powers and the elements at bay, a School of Magus was
              established, providing law and order for those who seek it, and
              for those, destined to be the protectors of this world. Six
              elements from the worldly reality, Water, Fire, Nature, Thunder,
              Light, and Darkness. They have become the mightiest of Magus. Once
              born in a world so physical and obvious, but accomplished
              unimaginable deeds in another, The Magus.
              <br />
            </p>
            <div class="row justify-content-center">
              <div class="board col-12">
                <div class="board-inner">
                  <ul class="nav nav-tabs align-items-center" id="myTab">
                    <li className="active col-4 col-md-2">
                      <a href="#home" data-toggle="tab" title="Red">
                        <img
                          className="shadow1 d-block mx-auto  w-100"
                          src={Gem1}
                        />
                      </a>
                    </li>
                    <li className="col-4 col-md-2">
                      <a href="#profile" data-toggle="tab" title="Sharp yellow">
                        <img
                          className="shadow2 d-block mx-auto  w-100"
                          src={Gem2}
                        />
                      </a>
                    </li>
                    <li className="active col-4 col-md-2">
                      <a href="#messages" data-toggle="tab" title="Green">
                        <img
                          className="shadow3 d-block mx-auto  w-100"
                          src={Gem3}
                        />
                      </a>
                    </li>
                    <li className="active col-4 col-md-2">
                      <a href="#settings" data-toggle="tab" title="Blue">
                        <img
                          className="shadow4 d-block mx-auto  w-100"
                          src={Gem4}
                        />
                      </a>
                    </li>
                    <li className="active col-4 col-md-2">
                      {" "}
                      <a href="#doner" data-toggle="tab" title="Purple">
                        <img
                          className="shadow5 d-block mx-auto  w-100"
                          src={Gem5}
                        />
                      </a>
                    </li>
                    <li className="active col-4 col-md-2">
                      {" "}
                      <a href="#Six" data-toggle="tab" title="light yellow">
                        <img
                          className="shadow6 d-block mx-auto  w-100"
                          src={Gem6}
                        />
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="tab-content pb-5">
                  <div class=" tab-pane fade show active" id="home">
                    <div className="container">
                      <div className="row align-items-center">
                        <div className="col-md-6">
                          <img
                            className="d-block mx-auto w-100  char"
                            src={ifrit}
                          ></img>
                        </div>
                        <div className="col-md-6">
                          <div className="glass">
                            <img
                              className="mx-auto d-block px-5 pt-5 pb-3 w-100 "
                              src={ifritt}
                            ></img>
                            <h5 className="px-5">Ifrit The Blaze</h5>

                            <p className="px-5 Txt">
                              Good friend of Water Magus. Ifrit has mighty power
                              which may cause people around him to get burned
                              therefore Yun will be around him most of the time.
                              <br />
                              <br />
                              The Inferno Mark changes its form according to
                              Ifrit's mood. The more marks, the stronger power
                              for Ifrit. As he has huge and dangerous power in
                              it, Ifrit controls his power by wearing the Metal
                              Rings on his arms.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="profile">
                    <div className="container">
                      <div className="row align-items-center">
                        <div className="col-md-6">
                          <img
                            className="d-block mx-auto char"
                            src={Levina}
                          ></img>
                        </div>
                        <div className="col-md-6">
                          <div className="glass">
                            <img
                              className="mx-auto d-block px-5 pt-5 pb-3 w-100 "
                              src={Levinat}
                            ></img>
                            <h5 className="px-5"> Levina The Current</h5>

                            <p className="px-5 Txt">
                              A dashing & justice Thunder Magus. The one who
                              will always stand up for the others when someone
                              around her get bullied. Admired by everyone but
                              most of them will avoid from getting too close to
                              her as it's easy to get electrocuted by her
                              thunder shockwave.
                              <br />
                              <br />
                              Levina is a great AOE damage dealer as the ability
                              to absorb electrons from molecules through the
                              Antenna to create powerful source of electricity.
                              It can not only cause great damage but also have
                              the effect to paralyze the opponent.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="messages">
                    <div className="container">
                      <div className="row align-items-center">
                        <div className="col-md-6">
                          <img
                            className="d-block mx-auto char"
                            src={hana}
                          ></img>
                        </div>
                        <div className="col-md-6">
                          <div className="glass">
                            <img
                              className="mx-auto d-block px-5 pt-5 pb-3 w-100 "
                              src={hanat}
                            ></img>
                            <h5 className="px-5"> Hana The Dryad</h5>

                            <p className="px-5 Txt">
                              Hana the typical Nature Magus. She is charming and
                              pretty among the Magus. Often surrounded by
                              butterflies due to her aromatic scent as well as
                              her personality.
                              <br />
                              <br />
                              Ability to drain enemy's power by using Fern Whip
                              and turn it into the Invigorate Flower which could
                              provide buffs for teammates. Better not to make
                              her go mad or else she will drain yours too.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="settings">
                    <div className="container">
                      <div className="row align-items-center">
                        <div className="col-md-6">
                          <img
                            className="d-block mx-auto char"
                            src={sketch}
                          ></img>
                        </div>
                        <div className="col-md-6">
                          <div className="glass">
                            <img
                              className="mx-auto d-block px-5 pt-5 pb-3 w-100 "
                              src={AboutPra}
                            ></img>
                            <h5 className="px-5">Yun the Cloud</h5>

                            <p className="px-5 Txt">
                              Adorable girl yet having powerful force. Likes to
                              be friend with Fire Magus because whenever the
                              temperature is too low, the moisture tends to
                              condense, which will cause the body becomes heavy
                              <br />
                              <br />
                              Ability to create clouds that deal AOE damage as
                              well as healing. Yun is able to change the
                              substance of the cloud with the Dew Necklace. Yun
                              could consume specific potion to cast the spell
                              whenever the Dew Necklace is not working.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="doner">
                    <div className="container">
                      <div className="row align-items-center">
                        <div className="col-md-6">
                          <img
                            className="d-block mx-auto char"
                            src={mata}
                          ></img>
                        </div>
                        <div className="col-md-6">
                          <div className="glass">
                            <img
                              className="mx-auto d-block px-5 pt-5 pb-3 w-100 "
                              src={matat}
                            ></img>
                            <h5 className="px-5"> Mata the Beholder</h5>

                            <p className="px-5 Txt">
                              Ability to create multiple eyes to scout everyone
                              within the environment. Good at keeping secret yet
                              use to threat the others when necessary. Mata is
                              sly and shrewd and there's no secrets on campus
                              that she doesn't know .
                              <br />
                              <br />
                              Different eyes corresponding different abilities:
                              <br />
                              Beholding eye of scout (Yellow)
                              <br />
                              Laser eye of doom (Red)
                              <br />
                              Oracle eye of foresee (Blue)
                              <br />
                              Healing eye of therapy (Green)
                              <br />
                              Hypnosis eye of hypnotize (Pink)
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="Six">
                    <div className="container">
                      <div className="row align-items-center">
                        <div className="col-md-6">
                          <img className="d-block mx-auto char" src={ray}></img>
                        </div>
                        <div className="col-md-6">
                          <div className="glass">
                            <img
                              className="mx-auto d-block px-5 pt-4 pb-3 w-100 "
                              src={rayt}
                            ></img>
                            <h5 className="px-5">Ray the Prism</h5>

                            <p className="px-5 Txt">
                              The kind, humorous and funny Light Magus. He could
                              brighten up anyone's day as he will always spice
                              up everyone around him. But there are many unknown
                              secrets hidden behind his cheerful appearance.
                              <br />
                              <br />
                              Light Magus is not as gentle and kind as it seems.
                              They gained control of the Forbidden Light Magic
                              that could easily destroy and harmful to others.
                              The power is far way more frightening than the
                              Dark Magus
                              <br />
                              <br />
                              The Prism Badge representing the Light Magus and
                              ability to fire Prismatic Beam which may cause
                              great damage to the opponent as it is the target
                              locked skill.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="clearfix"></div>
                </div>
              </div>
            </div>
            <section style={{ background: "#efefe9;" }}>
              <div class="container-fluid"></div>
            </section>

            {/* <img className="shadowfilter my-1  d-block mx-auto  w-100" src={Gem} />

            <div className="row align-items-center">
              <div className="col-md-6">
                <img className="d-block ml-auto " src={sketch}></img>
              </div>
              <div className="col-md-6">
                <img className="w-100 " src={AboutPra}></img>
              </div>
            </div> */}

            <div>
              <img className="d-block mx-auto py-5 Himgs" src={Traits}></img>
              {/* <img
                className=" shadowfilter my-1  d-block mx-auto w-100"
                src={traitImg}
              ></img> */}
              <div className="container">
                <div className="row py-3 TRow">
                  <div className="col-md-3">
                    <div className="mx-3">
                      <img
                        className=" shadowfilter my-1  d-block mx-auto w-100"
                        src={TImg1}
                      ></img>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="mx-3">
                      <img
                        className=" shadowfilter my-1  d-block mx-auto w-100"
                        src={TImg2}
                      ></img>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="mx-3">
                      <img
                        className=" shadowfilter my-1  d-block mx-auto w-100"
                        src={TImg3}
                      ></img>
                      <div className="col-md-3"></div>
                    </div>
                  </div>
                </div>
                <div className="row pb-3 TRow">
                  <div className="col-md-2"></div>
                  <div className="col-md-3">
                    <div className="mx-3">
                      <img
                        className=" shadowfilter my-1  d-block mx-auto w-100"
                        src={TImg4}
                      ></img>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="mx-3">
                      <img
                        className=" shadowfilter my-1  d-block mx-auto w-100"
                        src={TImg5}
                      ></img>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="mx-3">
                      <img
                        className=" shadowfilter my-1  d-block mx-auto w-100"
                        src={TImg6}
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a id="magusmap"></a>

        <div className="RoadMapDiv">
          <img className="w-100" src={RoadMap}></img>
        </div>
        <a id="faq"></a>

        <div className="FAQDiv lime">
          {/* <div className=""> */}
          <div class="container pt-5 pb-1">
            <img className="d-block mx-auto py-5 " src={FaqTxt}></img>
            {/* <img className=" py-3 Himgs mx-auto d-block" src={FAQ}></img> */}

            <div class="container col-10 py-5">
              <div id="accordion" class="panel-group">
                <div class="panel">
                  <div class="panel-heading">
                    <h4 class="panel-title">
                      <a
                        href="#panelBodyOne"
                        class="accordion-toggle  p-4  text-blue "
                        data-toggle="collapse"
                        data-parent="#accordion"
                      >
                        What is The Magus?
                      </a>
                    </h4>
                  </div>
                  <div id="panelBodyOne" class="panel-collapse collapse in">
                    <div class="text-blue panel-body">
                      <p className="px-5 py-3 FaqTxt">
                        The Magus is a collection of NFTs centred around
                        fantasy, art, and community. Each Magus will reside on
                        the Ethereum blockchain as a non-fungible token (NFT)
                        made up of more than 220+ traits from 6 different
                        categories and 13 unique 1/1s.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="panel my-4 ">
                  <div class="panel-heading">
                    <h4 class="panel-title">
                      <a
                        href="#panelBody2"
                        class="accordion-toggle p-4 text-blue "
                        data-toggle="collapse"
                        data-parent="#accordion"
                      >
                        How many MAGUS is in the collection?{" "}
                      </a>
                    </h4>
                  </div>
                  <div id="panelBody2" class="panel-collapse collapse in">
                    <div class="text-blue panel-body">
                      <p className="px-5 py-3 FaqTxt">
                        There will be total of 6,666 MAGUS in the collection.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="panel my-4">
                  <div class="panel-heading">
                    <h4 class="panel-title">
                      <a
                        href="#panelBody3"
                        class="accordion-toggle p-4 text-blue "
                        data-toggle="collapse"
                        data-parent="#accordion"
                      >
                        When is the mint date?{" "}
                      </a>
                    </h4>
                  </div>
                  <div id="panelBody3" class="panel-collapse collapse in">
                    <div class="text-blue panel-body">
                      <p className="px-5 py-3 FaqTxt">TBA</p>
                    </div>
                  </div>
                </div>

                <div class="panel my-4">
                  <div class="panel-heading">
                    <h4 class="panel-title">
                      <a
                        href="#panelBody4"
                        class="accordion-toggle p-4 text-blue "
                        data-toggle="collapse"
                        data-parent="#accordion"
                      >
                        What is the mint price?{" "}
                      </a>
                    </h4>
                  </div>
                  <div id="panelBody4" class="panel-collapse collapse in">
                    <div class="text-blue panel-body">
                      <p className="px-5 py-3 FaqTxt">TBA</p>
                    </div>
                  </div>
                </div>

                <div class="panel my-4">
                  <div class="panel-heading">
                    <h4 class="panel-title">
                      <a
                        href="#panelBody5"
                        class="accordion-toggle p-4 text-blue "
                        data-toggle="collapse"
                        data-parent="#accordion"
                      >
                        When is the reveal?{" "}
                      </a>
                    </h4>
                  </div>
                  <div id="panelBody5" class="panel-collapse collapse in">
                    <div class="text-blue panel-body">
                      <p className="px-5 py-3 FaqTxt">TBA</p>
                    </div>
                  </div>
                </div>

                <div class="panel my-4">
                  <div class="panel-heading">
                    <h4 class="panel-title">
                      <a
                        href="#panelBody7"
                        class="accordion-toggle p-4 text-blue "
                        data-toggle="collapse"
                        data-parent="#accordion"
                      >
                        What are the secondary royalties?{" "}
                      </a>
                    </h4>
                  </div>
                  <div id="panelBody7" class="panel-collapse collapse in">
                    <div class="text-blue panel-body">
                      <p className="px-5 py-3 FaqTxt">
                        Magus will receive 6.6% of all secondary sales. Royalty
                        funds received will be given back to community in ETH or
                        NFTs through holders-only giveaway.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="panel my-4">
                  <div class="panel-heading">
                    <h4 class="panel-title">
                      <a
                        href="#panelBody6"
                        class="accordion-toggle p-4 text-blue "
                        data-toggle="collapse"
                        data-parent="#accordion"
                      >
                        How do I get Wizard List (WL)?{" "}
                      </a>
                    </h4>
                  </div>
                  <div id="panelBody6" class="panel-collapse collapse in">
                    <div class="text-blue panel-body">
                      <p className="px-5 py-3 FaqTxt">
                        There will be giveaways, collaborations and games in our
                        Discord and Twitter.
                        <br />
                        Join our Discord for more details.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
        <a id="team"></a>

        <div className="container-fluid TeamDiv">
          <div className="container">
            <img className="d-block mx-auto py-5" src={TeamTxt}></img>
            <div className="row text-center py-5">
              <div className="col-md-3">
                <div className="m-">
                  <img className="imgsTeam" src={T4}></img>
                  <h2 className="text-blue pt-3 font-weight-bold">Sabuz</h2>
                  <h6 className="text-blue mx-2 font-weight-bold">
                    Marketing & Project Lead of The Magus
                  </h6>
                  <a
                    href="https://twitter.com/Sabuzthemagus"
                    target={"_blank"}
                    style={{ cursor: "pointer" }}
                  >
                    <i class="fa-brands fa-twitter text-blue"></i>
                  </a>
                </div>
              </div>
              <div className="col-md-3">
                <div className="m-">
                  <img className="imgsTeam" src={T2}></img>
                  <h2 className="text-blue pt-3 font-weight-bold">Jayden</h2>
                  <h6 className="text-blue mx-2 font-weight-bold">
                    Community Manager of The Magus{" "}
                  </h6>
                  <a
                    href="https://twitter.com/JaydenL_Magus"
                    target={"_blank"}
                    style={{ cursor: "pointer" }}
                  >
                    <i class="fa-brands fa-twitter text-blue"></i>
                  </a>
                </div>
              </div>
              <div className="col-md-3">
                <div className="m-">
                  <img className="imgsTeam" src={T1}></img>
                  <h2 className="text-blue pt-3 font-weight-bold">Edi</h2>
                  <h6 className="text-blue mx-2 font-weight-bold">
                    Lead Artist of The Magus{" "}
                  </h6>
                  <a
                    href="https://twitter.com/edi_themagus"
                    target={"_blank"}
                    style={{ cursor: "pointer" }}
                  >
                    <i class="fa-brands fa-twitter text-blue"></i>
                  </a>
                </div>
              </div>
              <div className="col-md-3">
                <div className="m-">
                  <img className="imgsTeam" src={T3}></img>
                  <h2 className="text-blue pt-3 font-weight-bold">Max</h2>
                  <h6 className="text-blue mx-2 font-weight-bold">
                    Lead Developer of The Magus{" "}
                  </h6>
                  {/* <a href="" target={"_blank"} style={{cursor:"pointer"}}>

                  <i class="fa-brands fa-twitter text-blue"></i>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <a id="marketplace"></a>
        <div className="">
          <img className="w-100" src={Mrketplce}></img>
        </div> */}
      </div>
    </>
  );
}
