import { Link } from "react-router-dom"

function Nav() {
  return (
    <nav>
      <ul className="nav">
        <li>
          <Link to="/">
            <span className="nav__underline">Services</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="nav__underline">Work</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="nav__underline">About</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="nav__underline">Blog</span>
          </Link>
        </li>
        <li>
          <Link to="/">
            <span className="nav__underline">Contact</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
