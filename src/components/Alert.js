import React from 'react'//rfc
import '../App.css'
export default function alert(props) {
  return (
    props.alert && <div className={`alert-${props.alert.type}  ${props.color} d-flex justify-content-center`} role="alert">
        {props.alert.message}
    </div>
  )
}
