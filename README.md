# react-tri-state-checkbox

> A mixed-state checkbox for React based on the WAI-ARIA Authoring Practices's [tri-state checkbox](https://www.w3.org/TR/wai-aria-practices-1.1/#checkbox).
> For more details see [this specification](https://www.w3.org/TR/wai-aria-practices-1.1/#checkbox).

## Installation

```shell
$ npm i react-tri-state-checkbox
```

---

## Usage

### `<TriStateCheckbox />`

The mixed-state checkbox component.

#### Props

| Name   | Type     | Required | Description                                                                                                                                                   |
| ------ | -------- | :------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| render | Function |    ❌    | A function used to render the mixed-state checkbox. The current state is passed as the prop `aria-checked`, which can be either `true`, `false` or `'mixed'`. |

Please note that if you are **not** rendering your own checkbox for this component, you probably want to import the default styles for the mixed-state checkbox by importing the following stylesheet:

```js
import 'react-tri-state-checkbox/dist/styles.css'
```

### `<Checkbox />`

A checkbox associated with the `<TriStateCheckbox />`.

#### Props

| Name    | Type     | Required | Description                                                                                        |
| ------- | -------- | :------: | -------------------------------------------------------------------------------------------------- |
| id      | string   |    ✅    | A unique `id`. Also passed to `<TriStateContext />` in `controls` array.                           |
| checked | boolean  |    ❌    | The state of the checkbox.                                                                         |
| render  | Function |    ❌    | A function used to render the checkbox. The current state is passed as the boolean prop `checked`. |

### `<TriStateContext />`

A context wrapper that handles checkbox state changes. Must wrap `<TriStateCheckbox />` and `<Checkbox />`.

#### Props

| Name     | Type  | Required | Description                          |
| -------- | ----- | :------: | ------------------------------------ |
| controls | Array |    ✅    | An array of controlled checkbox ids. |

---

## Contributing

This project is open to and encourages contributions! Feel free to discuss any bug fixes/features in the [issues](https://github.com/shwilliam/react-tri-state-checkbox/issues). If you wish to work on this project:

1. Fork [this project](https://github.com/shwilliam/react-tri-state-checkbox)
2. Create a branch (`git checkout -b new-branch`)
3. Commit your changes (`git commit -am 'add new feature'`)
4. Push to the branch (`git push origin new-branch`)
5. [Submit a pull request!](https://github.com/shwilliam/react-tri-state-checkbox/pull/new/master)
