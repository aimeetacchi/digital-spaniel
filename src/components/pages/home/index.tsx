import Hero from "../../hero"
import CaseStudies from "../../caseStudies"
import WhatCapableOf from "../../whatCapableOf"
import Projects from "../../projects"
import Footer from "../../footer"

function Home() {
  return (
    <div>
      <Hero />
      <WhatCapableOf />
      <Projects />
      <CaseStudies />

      <section className="whatareweallabout">
        <div className="grid">
          <div className="item">
            <div className="wrapper">
              <h3 className="whatareweallabout__heading">
                What are
                <br />
                <span className="heading__grey">we all about?</span>
              </h3>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Home
