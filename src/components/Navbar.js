import React from 'react'
import PropTypes from 'prop-types'
import '../App.css'
// import { Link } from 'react-router-dom'
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-light bg-light`}>
    <div className="container-fluid d-flex justify-content-around">
      <a className="navbar-brand" href="#">{props.title}</a>
      {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button> */}
      <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
        <div className='dark color-box' onClick={()=>{props.themeChanger('dark')}}></div>
        <div className='skin color-box' onClick={()=>{props.themeChanger('skin')}}></div>
        <div className='multi color-box' onClick={()=>{props.themeChanger('multi')}}></div>
      </div>

    </div>
  </nav>

  )
}

Navbar.propTypes={

    title:PropTypes.string.isRequired,
    abt_txt:PropTypes.string

}

Navbar.defaultProps={
    title:"strange"
}