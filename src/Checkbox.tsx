import React, {useEffect, useContext} from 'react'
import {CheckboxContext} from './TriStateContext'

export interface CheckboxProps {
  id: string
  checked?: boolean
  render?(any): any
}

const Checkbox: React.FC<CheckboxProps> = ({
  id,
  checked = false,
  render,
  ...props
}) => {
  const {activeChildren, setActiveChildren, controls} = useContext(
    CheckboxContext,
  )

  useEffect(() => {
    if (checked !== true) return
    const updatedActiveChildren = [...activeChildren]
    updatedActiveChildren[controls.indexOf(id)] = true
    setActiveChildren(updatedActiveChildren)
  }, [])

  const handleChange = () => {
    const updatedActiveChildren = [...activeChildren]
    updatedActiveChildren[
      controls.indexOf(id)
    ] = !updatedActiveChildren[controls.indexOf(id)]
    setActiveChildren(updatedActiveChildren)
  }

  return render ? (
    render({
      type: 'checkbox',
      id: id,
      checked: activeChildren[controls.indexOf(id)],
      onChange: handleChange,
      ...props,
    })
  ) : (
    <input
      type="checkbox"
      id={id}
      checked={activeChildren[controls.indexOf(id)]}
      onChange={handleChange}
      {...props}
    />
  )
}

export default Checkbox
