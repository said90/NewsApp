import React from 'react'

function Header(props) {
  return (
    <div>
      <nav>
          <div className="nav-wrapper light-blue darken-3">
                <a href=" " className="brand-logo center">{props.titulo}</a>
          </div>
      </nav>
    </div>
  )
}

export default Header
