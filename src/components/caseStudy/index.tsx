import { Link } from "react-router-dom"
import { CaseStudy as CaseStudyInterface } from "../../features/caseStudies/caseStudiesTypes"

interface CaseStudyProps {
  caseStudy: CaseStudyInterface
}

function CaseStudy({ caseStudy }: CaseStudyProps) {
  const { title, description, link, image } = caseStudy
  return (
    <div className="casestudy">
      <div className="casestudy__grid">
        <div className="casestudy__item casestudy__item--left">
          <img src={image} alt="casesstudy" />
        </div>
        <div className="casestudy__item casestudy__item--right">
          <h2 className="casestudy__title">{title}</h2>
          <p className="casestudy__description">{description}</p>
          <Link to={link}>Read more</Link>
        </div>
      </div>
    </div>
  )
}

export default CaseStudy
