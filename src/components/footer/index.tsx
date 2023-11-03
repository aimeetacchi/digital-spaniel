import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="footer">
      <div className="grid">
        <div className="item">
          <div className="wrapper">
            <h3 className="footer__subheading">
              We're a brands <br />
              <span className="heading__grey">best friend</span>
            </h3>

            <Link className="footer__cta" to="/">
              <span className="footer__underline">Let's talk</span>
            </Link>
          </div>
        </div>
        <div className="item">
          <div className="footer__right-content">
            <div className="flex">
              <div className="item">
                <section className="footer__links">
                  <h3>Explore</h3>
                  <Link to="/">Services</Link>
                  <Link to="/">Work</Link>
                  <Link to="/">About</Link>
                  <Link to="/">Blog</Link>
                  <Link to="/">Careers</Link>
                </section>
              </div>
              <div className="item">
                <section className="footer__links">
                  <h3>Services</h3>
                  <Link to="/">Brand</Link>
                  <Link to="/">Development</Link>
                  <Link to="/">Marketing</Link>
                </section>
              </div>

              <div className="item">
                <section className="footer__links">
                  <h3>Questions?</h3>
                  <Link to="/">
                    Call Us
                    <br /> <span className="text-reg">0121 345 678</span>
                  </Link>
                  <Link to="/">
                    Email Us
                    <br />
                    <span className="text-reg">info@digitalspaniel.co.uk</span>
                  </Link>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom-wrapper">
        <div className="grid">
          <div className="item">
            <p className="footer__text">
              Copyright &copy; Digital Spaniel 2019. All rights reserved.
            </p>
          </div>
          <div className="item">
            <div className="footer__social">
              <p>social items here</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
