import * as React from "react"
import PropTypes from "prop-types"

import { Link } from "gatsby"

import ReportModal from "./report_modal"

const Header = ({ siteTitle }) => (
  <header>
    <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-3">
      <div className="container">
        <Link className="navbar-brand" to="/">
          {siteTitle} <img src={`../../images/bomb.png`} alt="bomb" width="40px" style={{
            verticalAlign: `bottom`
          }} />
        </Link>
        <button type="button" className="btn btn-sm btn-outline-light" data-bs-toggle="modal" data-bs-target="#reportModal">제보/건의</button>
        {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ms-auto mb-2 mb-md-0 text-end">
            <li className="nav-item">
            </li>
          </ul>
        </div> */}
      </div>
    </nav>
    <ReportModal />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
