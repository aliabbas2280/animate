import { useEffect, useRef, useState } from "react";
import "../Css/Second.css";
import "../Responsive/Second.css";
import antony from "../images/antony.jpg";
import drink from "../images/drink.jpg";

const Second = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 992);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleScroll = () => {
      if (!containerRef.current || isMobile) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const startPoint = windowHeight * 0.6;
      const endPoint = -windowHeight * 1.2;
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
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  const easeInOutCubic = (t) => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  const easedProgress = easeInOutCubic(scrollProgress);

  // On mobile, don't apply scroll animations
  if (isMobile) {
    return (
      <div className="second-container" ref={containerRef}>
        <div className="second-left">
          <div className="anchor-box">ANCHOR</div>
          
          <div className="second-title">
            Real people.
          </div>
        </div>

        <div className="second-right">
          <div className="image-card first-image">
            <img src={antony} alt="Real person" />
          </div>
        </div>
      </div>
    );
  }

  // Desktop view with animations
  return (
    <div className="second-container" ref={containerRef}>
      <div className="second-left">
        <div className="anchor-box">ANCHOR</div>
        
        <div 
          className="second-title"
          style={{
            transform: `translateX(${easedProgress * 50}%)`,
            opacity: Math.max(0, 1 - easedProgress * 1.5),
            filter: `blur(${easedProgress * 8}px)`
          }}
        >
          Real people.
        </div>

        <div 
          className="design-text"
          style={{
            transform: `translateX(${(1 - easedProgress) * -50}%)`,
            opacity: Math.max(0, easedProgress * 1.2 - 0.2),
            filter: `blur(${(1 - easedProgress) * 8}px)`
          }}
        >
          <div>Real people.</div>
          <div>Real dates.</div>
        </div>
      </div>

      <div className="second-right">
        <div 
          className="image-card first-image"
          style={{
            transform: `translateY(${easedProgress * -15}%) scale(${1 - easedProgress * 0.15})`,
            opacity: Math.max(0, 1 - easedProgress * 1.3),
            zIndex: easedProgress > 0.5 ? 1 : 3
          }}
        >
          <img src={antony} alt="Real person" />
        </div>

        <div 
          className="image-card design-image"
          style={{
            transform: `translateY(${(1 - easedProgress) * 15}%) scale(${0.85 + easedProgress * 0.15})`,
            opacity: Math.max(0, easedProgress * 1.2 - 0.2),
            zIndex: easedProgress > 0.5 ? 3 : 1
          }}
        >
          <img src={drink} alt="Real dates" />
        </div>
      </div>
    </div>
  );
};

export default Second;