import React, {useContext} from 'react'
import {CheckboxContext} from './TriStateContext'

const TriStateCheckbox: React.FC<TriStateCheckbox> = ({
  id,
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

  const onToggle = () => {
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
    <label onClick={onToggle}>
      {render ? (
        render({
          'aria-checked': activeState,
          'aria-controls': controls.join(' '),
          onClick: onToggle,
          onKeyDown(e: React.KeyboardEvent) {
            e.keyCode === 32 && onToggle()
          },
          className,
          ...props,
        })
      ) : (
        <span
          role="checkbox"
          aria-checked={activeState}
          aria-controls={controls.join(' ')}
          tabIndex={0}
          onClick={onToggle}
          onKeyDown={e => e.keyCode === 32 && onToggle()}
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
  id: string
  render?(props: any): any
  className?: string
  children: string | JSX.Element[] | JSX.Element
}

export default TriStateCheckbox
