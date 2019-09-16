import React, {useContext} from 'react'
import {CheckboxContext} from './TriStateContext'

const TriStateCheckbox: React.FC<TriStateCheckbox> = ({
  render,
  className,
  children,
  ...props
}) => {
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
          className,
          ...props,
        })
      ) : (
        <span
          role="checkbox"
          aria-checked={activeState}
          aria-controls={controls.join(' ')}
          tabIndex={0}
          onClick={handleToggle}
          onKeyDown={e => e.keyCode === 32 && handleToggle()}
          className={
            className
              ? `${className} tri-state-checkbox`
              : 'tri-state-checkbox'
          }
          {...props}
        >
          {children}
        </span>
      )}
    </label>
  )
}

export interface TriStateCheckbox {
  render?(any): any
  className?: string
  children: JSX.Element[] | JSX.Element
}

export default TriStateCheckbox
