import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

export default function Header({title, handleShowAddTask, showAddTask}) {
  return (
    <header className="header">
        <h1 className="title">{title}</h1>
        <Button color={showAddTask ? 'red' : 'green'} text={showAddTask ? 'Close' : 'Add'} handleClick={handleShowAddTask} />
    </header>    
  )
}

Header.defaultProps = {
    title: 'Task tracker',
}

Header.propTypes = {
    title: PropTypes.string
}
