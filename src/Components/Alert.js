import React from 'react'

function Alert(props) {
  return (
    props.alert && <div class="alert alert-success d-flex align-items-center" role="alert">
   
    <div className='container my-2'>
      {/* An example success alert with an icon */}
    <strong>{props.alert.type}</strong>: {props.alert.msg}

    </div>
  </div>
  )
}

export default Alert
