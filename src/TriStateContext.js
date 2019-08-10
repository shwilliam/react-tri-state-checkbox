import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'

export const CheckboxContext = React.createContext()

const TriStateContext = ({controls, children}) => {
  const [activeState, setActiveState] = useState()
  const [activeChildren, setActiveChildren] = useState(
    [...controls].fill(false),
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

TriStateContext.propTypes = {
  controls: PropTypes.arrayOf(PropTypes.string).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default TriStateContext
