import React from 'react'
import ReactDOM from 'react-dom'
import TriStateCheckbox from '../dist'

function Demo() {
  return (
    <div>
      <TriStateCheckbox />
    </div>
  )
}

const el = document.getElementById('demo')
ReactDOM.render(<Demo />, el)
