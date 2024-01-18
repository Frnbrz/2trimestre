import { Link } from "react-router-dom"

function Header() {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light px-4">
      <Link to={"/products"} className="navbar-brand">
        App
      </Link>
      <div className="navbar-nav mr-auto">
        <li className="nav-item">
          <Link to={"/products"} className="nav-link">
            Product
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"/add"} className="nav-link">
            Add
          </Link>
        </li>
      </div>
    </nav>
  )
}

export default Header