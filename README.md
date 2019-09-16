# react-tri-state-checkbox

> A mixed-state checkbox for React based on the WAI-ARIA Authoring Practices's [tri-state checkbox](https://www.w3.org/TR/wai-aria-practices-1.1/#checkbox).
> For more details see [this specification](https://www.w3.org/TR/wai-aria-practices-1.1/#checkbox).

![Tri-state checkbox usage gif](https://user-images.githubusercontent.com/38357771/63289330-b24e1500-c273-11e9-844b-7770fbec9d2a.gif)

[![Try it on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/react-tri-state-checkbox-demo-8j7mo?fontsize=14)

---

## Installation

```shell
$ npm i react-tri-state-checkbox
```

---

## Usage

The following example demonstrates how the `react-tri-state-checkbox` components work together in an accessible example:

```jsx
import React from 'react'
import {
  Checkbox,
  TriStateCheckbox,
  TriStateContext,
} from 'react-tri-state-checkbox'
import 'react-tri-state-checkbox/dist/styles.css'

const CondimentsSelect = () => (
  <TriStateContext controls={['cond1', 'cond2', 'cond3']}>
    <fieldset role="group" aria-labelledby="all-condiments-input">
      <legend>Sandwich Condiments</legend>

      <TriStateCheckbox id="all-condiments-input">
        All condiments
      </TriStateCheckbox>

      <label>
        {/* checked by default */}
        <Checkbox id="cond1" checked />
        Lettuce
      </label>

      <label>
        <Checkbox id="cond2" />
        Tomato
      </label>

      <label>
        <Checkbox id="cond3" />
        Mustard
      </label>
    </fieldset>
  </TriStateContext>
)
```

Note: For details about accessibility considerations please see [this](https://www.w3.org/TR/wai-aria-practices-1.1/#checkbox) document by the W3C detailing proper implementation.

### `<TriStateContext />`

A context wrapper that handles checkbox state changes. Must wrap `<TriStateCheckbox />` and `<Checkbox />`.

#### Props

| Name     | Type  | Required | Description                          |
| -------- | ----- | :------: | ------------------------------------ |
| controls | Array |    ✅    | An array of controlled checkbox ids. |

### `<TriStateCheckbox />`

The mixed-state checkbox component.

#### Props

| Name   | Type     | Required | Description                                                                                                                                                   |
| ------ | -------- | :------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| render | Function |    ❌    | A function used to render the mixed-state checkbox. The current state is passed as the prop `aria-checked`, which can be either `true`, `false` or `'mixed'`. |

Please note that if you are **not** rendering your own checkbox for this component, you probably want to import the default styles for the mixed-state checkbox by importing the following stylesheet:

```js
import 'react-tri-state-checkbox/styles/checkbox.css'
```

### `<Checkbox />`

A checkbox associated with the `<TriStateCheckbox />`.

#### Props

| Name    | Type     | Required | Description                                                                                        |
| ------- | -------- | :------: | -------------------------------------------------------------------------------------------------- |
| id      | string   |    ✅    | A unique `id`. Also passed to `<TriStateContext />` in `controls` array.                           |
| checked | boolean  |    ❌    | The state of the checkbox.                                                                         |
| render  | Function |    ❌    | A function used to render the checkbox. The current state is passed as the boolean prop `checked`. |

---

## Contributing

This project is open to and encourages contributions! Feel free to discuss any bug fixes/features in the [issues](https://github.com/shwilliam/react-tri-state-checkbox/issues). If you wish to work on this project:

1. Fork [this project](https://github.com/shwilliam/react-tri-state-checkbox)
2. Create a branch (`git checkout -b new-branch`)
3. Commit your changes (`git commit -am 'add new feature'`)
4. Push to the branch (`git push origin new-branch`)
5. [Submit a pull request!](https://github.com/shwilliam/react-tri-state-checkbox/pull/new/master)
