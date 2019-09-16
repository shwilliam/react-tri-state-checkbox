import React, {useEffect, useContext} from 'react'
import {CheckboxContext} from './TriStateContext'

const Checkbox: React.FC<Checkbox> = ({
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

export interface Checkbox {
  id: string
  checked?: boolean
  render?(props: any): any
}

export default Checkbox
