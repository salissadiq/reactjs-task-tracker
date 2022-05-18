import React from 'react'
import PropTypes from 'prop-types'

export default function Button({color, text, handleClick}) {
  return (
    <button 
    className="btn" 
    onClick={handleClick} 
    style={{backgroundColor:color}}
    >
        {text}
    </button>
  )
}

Button.defaultProps = {
    color: 'steelblue',
}
Button.prototype = {
    color: PropTypes.string,
    text: PropTypes.string
}
