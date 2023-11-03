import { useEffect } from "react"
import Slider from "react-slick"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { fetchProjects } from "../../features/projects/projectsSlice"
import { Link } from "react-router-dom"
import Project from "../project"

function Projects() {
  const dispatch = useAppDispatch()
  const { items, loading, error } = useAppSelector((state) => state.projects)
  useEffect(() => {
    dispatch(fetchProjects())
  }, [dispatch])

  if (loading) return <div>Loading projects...</div>
  if (error) return <div>Error: {error}</div>

  // Settings for the slider
  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    slidesToScroll: 1,
  }

  return (
    <div className="projects">
      <div className="grid">
        <div className="item">
          <div className="wrapper">
            <h3 className="projects__subheading">
              Some of our <br />
              <span className="heading__grey">recent projects</span>
            </h3>
          </div>
        </div>
      </div>

      <div className="grid">
        <div className="item-full">
          <div className="wrapper projects__nav">
            <ul>
              <li>
                <span className="projects__nav-underline active">All</span>
              </li>
              <li>
                <span className="projects__nav-underline">Branding</span>
              </li>
              <li>
                <span className="projects__nav-underline">Web Design</span>
              </li>
              <li>
                <span className="projects__nav-underline">
                  Digital Marketing
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {items.length > 0 && (
        <Slider {...settings}>
          <div className="projects__wrapper">
            <div className="grid-container">
              <div className="grid-item">
                <Project item={items[0]} />
              </div>
              <div className="grid-item">
                <Project item={items[1]} />
              </div>
              <div className="grid-item">
                <Project item={items[2]} />
              </div>
            </div>

            <div className="two-thirds-one-third-container">
              <div className="grid-item">
                <Project item={items[3]} />
              </div>
              <div className="grid-item">
                <Project item={items[4]} />
              </div>
            </div>
          </div>

          {/* If you have more items, you can continue the pattern for additional slides */}
          {items.length > 5 && (
            <div className="projects__wrapper">
              <div className="grid-container">
                <div className="grid-item">
                  <Project item={items[5]} />
                </div>
                <div className="grid-item">
                  <Project item={items[6]} />
                </div>
                <div className="grid-item">
                  <Project item={items[7]} />
                </div>
              </div>

              <div className="two-thirds-one-third-container">
                <div className="grid-item">
                  <Project item={items[8]} />
                </div>
                <div className="grid-item">
                  <Project item={items[9]} />
                </div>
              </div>
            </div>
          )}
        </Slider>
      )}

      <div className="grid margin-top-30">
        <div className="item">
          <div className="wrapper">
            <Link className="projects__cta" to="/">
              <span className="projects__underline">See all work</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
