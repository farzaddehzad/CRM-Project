import React from 'react'

const Button = (props) => {
  return (
    <button className="costum-button"
      onClick={props.onClick}> {props.text}

    </button>
  )
}

export default Button;
