import { Link } from "react-router-dom"
import heroImage from "/images/Spaniel01_gradient.png"

export default function Hero() {
  return (
    <div className="hero">
      <div className="grid">
        <div className="item">
          <div className="wrapper">
            <h2 className="hero__heading">BRAND, DEV, ECOM, MARKETING</h2>
            <h3 className="hero__subheading">
              We unleash <br />
              <span className="heading__grey">business potential</span>
            </h3>
            <p className="hero__content">
              We create brand experiences which are memorable and distinct. Our
              experienced team create and develop brands with personality and
              resonance.
            </p>
            <Link className="hero__cta" to="/">
              <span className="hero__underline">Let's talk</span>
            </Link>
          </div>
        </div>
        <div className="item">
          <img className="hero__image" src={heroImage} alt="hero" />
        </div>
      </div>
    </div>
  )
}
