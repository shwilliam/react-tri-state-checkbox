import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import {CheckboxContext} from './TriStateContext'

const TriStateCheckbox = ({render, children, ...props}) => {
  const {
    activeChildren,
    setActiveChildren,
    activeState,
    setActiveState,
    controls,
  } = useContext(CheckboxContext)

  const handleToggle = () => {
    switch (activeState) {
      case false:
        setActiveChildren(activeChildren.fill(true))
        setActiveState(true)
        break
      case 'mixed':
        setActiveChildren(activeChildren.fill(true))
        setActiveState(true)
        break
      default:
        setActiveChildren(activeChildren.fill(false))
        setActiveState(false)
        break
    }
  }

  return (
    <label onClick={handleToggle}>
      {render ? (
        render({
          'aria-checked': activeState,
          'aria-controls': controls.join(' '),
          onClick: handleToggle,
          onKeyDown: e => e.keyCode === 32 && handleToggle(),
          ...props,
        })
      ) : (
        <span
          role="checkbox"
          aria-checked={activeState}
          aria-controls={controls.join(' ')}
          tabIndex="0"
          onClick={handleToggle}
          onKeyDown={e => e.keyCode === 32 && handleToggle()}
          {...props}
        />
      )}
      {children}
    </label>
  )
}

TriStateCheckbox.propTypes = {
  render: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default TriStateCheckbox
