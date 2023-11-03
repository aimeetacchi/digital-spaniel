import { Link } from "react-router-dom"

function WhatCapableOf() {
  return (
    <div className="whatcapableof">
      <div className="grid">
        <div className="item">
          <div className="wrapper">
            <h3 className="whatcapableof__subheading">
              What are <br />
              <span className="heading__grey">we capable of</span>
            </h3>
            <p className="whatcapableof__content">
              By focusing on design as an enabler and putting a huge emphasis on
              our clients as co-producers, we create innovative, sustainable
              marketing that enhances brand experience and user engagement.
            </p>
            <Link className="whatcapableof__cta" to="/">
              <span className="whatcapableof__underline">Our process</span>
            </Link>
          </div>
        </div>
        <div className="item">
          <div className="whatcapableof__right-content">
            <div className="flex">
              <div className="item">
                <section className="whatcapableof__links">
                  <h3>Brand</h3>
                  <Link to="/">Brand Strategy</Link>
                  <Link to="/">Logo & Name</Link>
                  <Link to="/">Identity & Collateral</Link>
                </section>

                <section className="whatcapableof__links">
                  <h3>Development</h3>
                  <Link to="/">eComomerce</Link>
                  <Link to="/">Web Development</Link>
                  <Link to="/">Mobile Apps</Link>
                </section>
              </div>

              <div className="item">
                <section className="whatcapableof__links">
                  <h3>Marketing</h3>
                  <Link to="/">Brand Strategy</Link>
                  <Link to="/">Market Research</Link>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhatCapableOf
