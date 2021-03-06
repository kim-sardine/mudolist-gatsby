import * as React from "react"
import PropTypes from "prop-types"

const Header = ({ siteTitle }) => (
  <header>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-3">
      <div class="container">
        <a class="navbar-brand" href="/">
          {siteTitle} <img src={`../../images/bomb.png`} alt="bomb" width="40px" style={{
            verticalAlign: `bottom`
          }} />
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav ms-auto mb-2 mb-md-0 text-end">
            <li class="nav-item">
              <a class="nav-link" href="#">a</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">b</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">c</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
