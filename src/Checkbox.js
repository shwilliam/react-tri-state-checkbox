import React, {useEffect, useContext} from 'react'
import PropTypes from 'prop-types'
import {CheckboxContext} from './TriStateContext'

const Checkbox = ({id, checked = false, ...props}) => {
  const {activeChildren, setActiveChildren, controls} = useContext(
    CheckboxContext,
  )

  useEffect(() => {
    if (checked !== true) return
    const updatedActiveChildren = [...activeChildren]
    updatedActiveChildren[controls.indexOf(id)] = true
    setActiveChildren(updatedActiveChildren)
  }, []) // eslint-disable-line

  const handleChange = () => {
    const updatedActiveChildren = [...activeChildren]
    updatedActiveChildren[
      controls.indexOf(id)
    ] = !updatedActiveChildren[controls.indexOf(id)]
    setActiveChildren(updatedActiveChildren)
  }

  return (
    <input
      type="checkbox"
      id={id}
      checked={activeChildren[controls.indexOf(id)]}
      onChange={handleChange}
      {...props}
    />
  )
}

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool,
}

export default Checkbox
