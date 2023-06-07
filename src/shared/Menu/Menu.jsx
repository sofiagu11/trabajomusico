import { Link } from "react-router-dom";
import "./Menu.css";
export function Menu() {
  return (
    <>
      <nav className="navbar navbar-expand-lg menu navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Blackpink
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/integrantes">
                  Integrantes
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/tienda">
                  Tienda
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/musica">Musica</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/fans">Fans</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/hooks">Hooks</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
