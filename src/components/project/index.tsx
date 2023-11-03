import { Link } from "react-router-dom"
import { Project as ProjectTypes } from "../../features/projects/projectsTypes"

interface ProjectProps {
  item: ProjectTypes
}

export default function Project({ item }: ProjectProps) {
  return (
    <div className="project-single">
      <img className="project-single__image" src={item.image} alt="" />
      <div className="project-single__overlay">
        <div className="project-single__text">
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <Link to={item.link}>
            <span className="project-single__underline">Full Project</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
