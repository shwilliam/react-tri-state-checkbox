import React, {useEffect, useState} from 'react'

type TStates = boolean[]
type TSetActiveChildrenStateSetter = (stateSetter: (states: TStates) => TStates) => any

interface IProps {
  controls: string[];
  children: JSX.Element[] | JSX.Element;
}

interface ICheckboxContextInterface {
  activeChildren: TStates;
  setActiveChildren: TSetActiveChildrenStateSetter;
  activeState?: any;
  setActiveState: (state: boolean | string) => any;
  controls: string[];
}

export const CheckboxContext = React.createContext<
    ICheckboxContextInterface
  >({
    activeChildren: [],
    // HACK: treats state setters as always defined
    setActiveChildren: (s: any): any => s,
    setActiveState: (s: any): any => s,
    controls: [],
  })

const TriStateContext: React.FC<IProps> = ({
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
