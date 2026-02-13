import { useEffect, useRef, useState } from "react";
import "../Css/Second.css";
import "../Responsive/Second.css";
import antony from "../images/antony.jpg";
import drink from "../images/drink.jpg";
const Second = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Start animation only after section is centered
      const startPoint = windowHeight * 0.2;
      const endPoint = -windowHeight * 0.8;
      const scrollRange = startPoint - endPoint;
      
      if (rect.top > startPoint) {
        setScrollProgress(0);
      } else if (rect.top < endPoint) {
        setScrollProgress(1);
      } else {
        const progress = (startPoint - rect.top) / scrollRange;
        setScrollProgress(Math.max(0, Math.min(1, progress)));
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="second-container" ref={containerRef}>
      <div className="second-left">
        <div className="anchor-box">ANCHOR</div>
        
        <div 
          className="second-title"
          style={{
            transform: `translateX(${scrollProgress * 400}px)`,
            opacity: 1 - scrollProgress
          }}
        >
          Real people.
        </div>

        <div 
          className="design-text"
          style={{
            transform: `translateX(${(1 - scrollProgress) * -400}px)`,
            opacity: scrollProgress
          }}
        >
          <div>Real people.</div>
          <div>Real dates.</div>
        </div>
      </div>

      <div className="second-right">
        <div 
          className="image-card"
          style={{
            transform: `translateY(${scrollProgress * -300}px)`,
            opacity: 1 - scrollProgress
          }}
        >
          <img src={antony} alt="Real person" />
        </div>

        <div 
          className="image-card design-image"
          style={{
            transform: `translateY(${(1 - scrollProgress) * 300}px)`,
            opacity: scrollProgress
          }}
        >
          <img src={drink} alt="Real person" />
        </div>
      </div>
    </div>
  );
};

export default Second;
