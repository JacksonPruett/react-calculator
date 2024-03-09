import React from 'react'
import TicTacToe from './components/TicTacToe'
import RockPaperScissors from './components/RockPaperScissors'
import TreasureHunt from './components/TreasureHunt'
import Calculator from './components/calculator'

const App = () => {
  return (
    <>
    <div className='grid-container'>
      <div><Calculator/></div>
      <div><TicTacToe/></div>
      <div><RockPaperScissors/></div>
      <div><TreasureHunt/></div>
    </div>
    </>
  )
}

export default App
