import React from 'react'
import { ACTIONS } from './calculator'

const DigitButton = ({ dispatch, digit }) => {
  return (
    // onClick run function dispatch
    // type is equal to ACTIONS object, ADD_DIGIT value
    // payload is equal to digit
    <button onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}>{digit}</button>
  )
}

export default DigitButton