import React from 'react'
import ReactDOM from 'react-dom'
import {Checkbox, TriStateCheckbox, TriStateContext} from '../dist'
import '../dist/styles.css'

const Demo = () => (
  <TriStateContext controls={['cond1', 'cond2', 'cond3', 'cond4']}>
    <fieldset>
      <legend>Sandwich Condiments</legend>
      <label style={{display: 'block', lineHeight: '2.6rem'}}>
        <TriStateCheckbox>All condiments</TriStateCheckbox>
      </label>
      <label style={{display: 'block', lineHeight: '2.6rem'}}>
        <Checkbox id="cond1" checked />
        Lettuce
      </label>
      <label style={{display: 'block', lineHeight: '2.6rem'}}>
        <Checkbox id="cond2" />
        Tomato
      </label>
      <label style={{display: 'block', lineHeight: '2.6rem'}}>
        <Checkbox id="cond3" />
        Mustard
      </label>
      <label style={{display: 'block', lineHeight: '2.6rem'}}>
        <Checkbox id="cond4" />
        Sprouts
      </label>
    </fieldset>
  </TriStateContext>
)

const el = document.getElementById('demo')
ReactDOM.render(<Demo />, el)
