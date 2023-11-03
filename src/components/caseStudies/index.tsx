import { useEffect } from "react"
import Slider from "react-slick"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { fetchCaseStudies } from "../../features/caseStudies/caseStudiesSlice"
import CaseStudy from "../caseStudy"

function CaseStudies() {
  // Settings for the slider
  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    centerMode: true,
    className: "center",
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          dots: true,
          centerMode: false,
          centerPadding: "0px",
          slidesToShow: 1,
        },
      },
    ],
  }

  const dispatch = useAppDispatch()
  const { items, loading, error } = useAppSelector((state) => state.caseStudies)
  useEffect(() => {
    dispatch(fetchCaseStudies())
  }, [dispatch])

  if (loading) return <div>Loading case studies...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div className="casestudies">
      <h2 className="casestudies__heading">Case Studies:</h2>
      <p className="casestudies__content">
        Every project is different. We like to work collaboratively with our
        clients, tailoring each project to suit the needs of you and your
        business.
      </p>
      <div>
        <Slider {...settings}>
          {items.map((caseStudy) => (
            <CaseStudy key={caseStudy.id} caseStudy={caseStudy} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default CaseStudies
