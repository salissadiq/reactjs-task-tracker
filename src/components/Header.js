import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

export default function Header(props) {
    function handleClick() {
        console.log('CLicked')
    }
  return (
    <header className="header">
        <h1 className="title">{props.title}</h1>
        <Button color="green" text="Add" handleClick={handleClick} />
    </header>    
  )
}

Header.defaultProps = {
    title: 'Task tracker',
}

Header.propTypes = {
    title: PropTypes.string
}
