import { useEffect } from "react";
import "../Css/Home.css";
import "../Responsive/Home.css";
import Logo from "../images/Logo.png";
import PhoneFrame from "../images/phoneFrame.png";
import AppStore from "../images/AppStore.png";
import Club from "../images/Club.png";
import Musem from "../images/Musem.png";
import Cafe from "../images/Cafe.png";
import Bablo from "../images/bablo.png";

const Home = () => {
  useEffect(() => {
    const images = document.getElementById("imageWrapper");
    const left = document.getElementById("leftContent");
    const phone = document.querySelector(".mobile-frame");

    const handleScroll = () => {
      if (window.scrollY > 100) {
        images.classList.add("animate-images");
        left.classList.add("change-content");
        phone.classList.add("hide-frame");
      } else {
        images.classList.remove("animate-images");
        left.classList.remove("change-content");
        phone.classList.remove("hide-frame");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="landing-container">
      <nav className="navbar">
        <div className="logo"></div>
        <div className="nav-item">Events</div>
      </nav>

      <div className="main-section">
        <div className="left-content" id="leftContent">
          <div className="icon-box">
            <img src={Logo} alt="icon" />
          </div>

          <div className="text-stack">
            <div className="bottom content-1">
              <h1>
                Match on the <i>experience</i>,<br />
                not just a face.
              </h1>

              <button className="appstore-btn">
                <img src={AppStore} alt="Download on App Store" />
              </button>
            </div>

            <div className="bottom content-2">
              <h1>
                Discover amazing places <br />
                with new people
              </h1>

              <div className="input-wrapper">
                <input type="email" placeholder="Enter your Gmail" />
                <button type="button">Join Waitlist</button>
              </div>
            </div>
          </div>
        </div>

        <div className="right-content">
          <div className="mobile-frame">
            <img src={PhoneFrame} alt="frame" className="phone-frame" />

            <div className="images-wrapper" id="imageWrapper">
              <img src={Club} alt="" className="img large img1" />
              <img src={Musem} alt="" className="img large img2" />
              <img src={Cafe} alt="" className="img large img3" />
              <img src={Bablo} alt="" className="img small pet" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
