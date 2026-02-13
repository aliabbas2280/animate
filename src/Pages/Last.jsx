import "../Css/Last.css";
import "../Responsive/Last.css";
import Bablo from "../images/Bablo.png";
import Movebablo from "../images/Movebablo.png";
import notification from "../images/notification.png";

const images = [
  { src: notification, cls: "img-1" },
  { src: Movebablo, cls: "img-2" },
  { src: Bablo, cls: "img-3" },
  { src: notification, cls: "img-4" },
  { src: Movebablo, cls: "img-5" },
  { src: Bablo, cls: "img-6" },
  { src: notification, cls: "img-7" },
  { src: Movebablo, cls: "img-8" },
  { src: Bablo, cls: "img-9" },
  { src: notification, cls: "img-10" },
  { src: Movebablo, cls: "img-11" },
  { src: Bablo, cls: "img-12" },
];

const Last = () => {
  return (
    <div className="anchor-page">
      {images.map((img, i) => (
        <div key={i} className={`floating-img ${img.cls}`}>
          <img src={img.src} alt="" />
        </div>
      ))}

      <div className="anchor-center">
        <div className="anchor-logo">ANCHOR</div>

        <p className="anchor-tagline">
          On Anchor, every match is a <span className="date-word">date</span>
        </p>

        <form
          className="anchor-form"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            className="anchor-input"
            type="email"
            placeholder="name@gmail.com"
            required
          />

          <button className="anchor-btn" type="submit">
            Join Waitlist
          </button>
        </form>
      </div>
    </div>
  );
};

export default Last;
