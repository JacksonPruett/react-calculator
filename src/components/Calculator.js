import React, { useState } from 'react'
import './calculatorstyles.css'

const Calculator = () => {
    // array for the numbers on the calculator
    const calNums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    // variable for multiplication
    const calMultiply = `${calNums} * ${calNums}`
    // variable for division
    const calDivide = `${calNums} / ${calNums}`
    // variable for addition
    const calAdd = `${calNums} + ${calNums}`
    // variable for subtraction
    const calSubtract = `${calNums} - ${calNums}`
    // state variable for total
    const [total, setTotal] = useState(0)
    
    const multiply = () => {
        return (calMultiply)
    }
    const divide = () => {
        return (calDivide)
    }
    const add = () => {
        return (calAdd)
    }
    const subtract = () => {
        return (calSubtract)
    }

  return (
    <>
        <div className='cal-body'>
            <div className='display'></div>
            <div className='num-pad'></div>
            <div className='operators'></div>
            <div className='btns'></div>
        </div>
    </>
  )
}

export default Calculator