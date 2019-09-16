import React, {useEffect, useState} from 'react'

export interface TriStateContext {
  controls: string[]
  children: JSX.Element[] | JSX.Element
}

export interface CheckboxContext {
  activeChildren: boolean[]
  setActiveChildren(any): any
  activeState: any
  setActiveState(any): any
  controls: string[]
}

export const CheckboxContext = React.createContext(
  {} as CheckboxContext,
)

const TriStateContext: React.FC<TriStateContext> = ({
  controls,
  children,
}) => {
  const [activeState, setActiveState] = useState()
  const [activeChildren, setActiveChildren] = useState(
    controls.map(() => false),
  )

  useEffect(() => {
    if (activeChildren.every(state => !state)) {
      setActiveState(false)
    } else if (activeChildren.every(state => state)) {
      setActiveState(true)
    } else {
      setActiveState('mixed')
    }
  }, [activeChildren])

  return (
    <CheckboxContext.Provider
      value={{
        activeChildren,
        setActiveChildren,
        activeState,
        setActiveState,
        controls,
      }}
    >
      {children}
    </CheckboxContext.Provider>
  )
}

export default TriStateContext
