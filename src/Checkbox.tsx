import React, {useEffect, useContext} from 'react'
import {CheckboxContext} from './TriStateContext'

export interface IProps {
  id: string;
  checked: boolean;
  render?: (props: any) => any;
}

const Checkbox: React.FC<IProps> = ({
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
    // FIXME: update type def to allow
    setActiveChildren(() => updatedActiveChildren)
  }, [])

  const onChange = () => {
    const updatedActiveChildren = [...activeChildren]
    updatedActiveChildren[
      controls.indexOf(id)
    ] = !updatedActiveChildren[controls.indexOf(id)]
    setActiveChildren(() => updatedActiveChildren)
  }

  return render ? (
    render({
      type: 'checkbox',
      id: id,
      checked: activeChildren[controls.indexOf(id)],
      onChange,
      ...props,
    })
  ) : (
    <input
      type="checkbox"
      id={id}
      checked={activeChildren[controls.indexOf(id)]}
      onChange={onChange}
      {...props}
    />
  )
}

export default Checkbox
