import React, {useCallback, useContext} from 'react'
import {CheckboxContext} from './TriStateContext'

const fillTrue = (arr: boolean[]): boolean[] => arr.fill(true)
const fillFalse = (arr: boolean[]): boolean[] => arr.fill(false)

export interface IProps {
  id: string;
  render?: (props: any) => any;
  className?: string;
  children: string | JSX.Element[] | JSX.Element;
}

const TriStateCheckbox: React.FC<IProps> = ({
  id,
  render,
  className,
  children,
  ...props
}) => {
  const {
    setActiveChildren,
    activeState,
    setActiveState,
    controls,
  } = useContext(CheckboxContext)

  const onToggle = useCallback(() => {
    switch (activeState) {
      case false:
        setActiveChildren(fillTrue)
        setActiveState(true)
        break
      case 'mixed':
        setActiveChildren(fillTrue)
        setActiveState(true)
        break
      default:
        setActiveChildren(fillFalse)
        setActiveState(false)
        break
    }
  }, [activeState, setActiveChildren, setActiveState])

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

export default TriStateCheckbox
