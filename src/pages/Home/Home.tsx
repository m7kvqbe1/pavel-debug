import React, { useState } from 'react'
import '@royalnavy/css-framework/dist/styles.css'
import { NumberInput } from '@royalnavy/react-component-library'

import { Main } from '../../layouts'

export const Home: React.FC<unknown> = () => {
  const initial = {
    foo: {
      bar: 1,
    },
  }

  const [state, setState] = useState(initial)

  const onChangeHandler = (e: any) => {
    const {
      target: { value },
    } = e

    setState({ ...state, ...{ foo: { bar: value } } })

    console.log('updated', state)
  }

  return (
    <Main>
      <NumberInput
        canClear
        name="number-input"
        onChange={onChangeHandler}
        value={1}
      />
    </Main>
  )
}
