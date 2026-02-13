import React, { useEffect, useRef } from "react";
import "../Css/Hero.css";
import "../Responsive/Hero.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import theater from "../images/theater.png";
import Bar from "../images/Bar.png";
import Brunch from "../images/Brunch.png";
import Movebablo from "../images/Movebablo.png";
import Bablo from "../images/Bablo.png";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const containerRef = useRef(null);
  const rightRef = useRef(null);
  const img1Ref = useRef(null);
  const img2Ref = useRef(null);
  const img3Ref = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          pin: rightRef.current,
        },
      });

      tl.to(img1Ref.current, { opacity: 0, scale: 0.8, duration: 1 })
        .to(img2Ref.current, { opacity: 1, scale: 1, duration: 1 }, "-=0.5")
        .to(textRef.current, { textContent: "FIND", duration: 0.1 }, "<")
        .to(img2Ref.current, { opacity: 0, scale: 0.8, duration: 1 }, "+=0.5")
        .to(img3Ref.current, { opacity: 1, scale: 1, duration: 1 }, "-=0.5")
        .to(textRef.current, { textContent: "MATCH", duration: 0.1 }, "<");
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="main-container" ref={containerRef}>
      <div className="left-section">
        <div className="icon-box">ANCHOR</div>
        <div className="main-text">
          <span className="changing-word" ref={textRef}>POST</span>
          <br />
          your perfect date.
        </div>
        <div></div>
      </div>

      <div className="right-section" ref={rightRef}>
        <div className="image-container">
          <img ref={img1Ref} src={Brunch} alt="date idea" className="main-img" />
          <img ref={img2Ref} src={Bar} alt="date idea" className="main-img" />
          <img ref={img3Ref} src={theater} alt="date idea" className="main-img" />
          <img src={Movebablo} alt="cat" className="floating-img cat" />
          <img src={Bablo} alt="dog" className="floating-img dog" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
