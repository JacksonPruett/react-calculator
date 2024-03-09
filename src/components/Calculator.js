import React, { useReducer } from "react";
import "./calculatorstyles.css";

const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR: "clear",
  DELETE_DIGIT: "delete-digit",
  EVALUATE: "evaluate",
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      return {
        ...state,
        currentOperand: `${state.currentOperand}${payload.digit}`,
      };
    case ACTIONS.CHOOSE_OPERATION:
      return {
        ...state,
        previousOperand: state.currentOperand,
        currentOperand: "",
        operation: payload.operation,
      };
    case ACTIONS.CLEAR:
      return {
        currentOperand: "",
        previousOperand: "",
        operation: "",
      };
    default:
      return state;
  }
};

const Calculator = () => {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {
      currentOperand: "",
      previousOperand: "",
      operation: "",
    }
  );

  const handleDigitClick = (digit) => {
    dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } });
  };

  const handleOperationClick = (operation) => {
    dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } });
  };

  const handleClearClick = () => {
    dispatch({ type: ACTIONS.CLEAR });
  };

  return (
    <>
      <h1>Calculator</h1>
      <div className="calculator-grid">
        <div className="output">
          <div className="previous-operand">
            {previousOperand} {operation}
          </div>
          <div className="current-operand">{currentOperand}</div>
        </div>
        <button className="span-two" onClick={handleClearClick}>
          AC
        </button>
        <button>DEL</button>
        <button onClick={() => handleOperationClick("÷")}>÷</button>
        <button onClick={() => handleDigitClick("1")}>1</button>
        <button onClick={() => handleDigitClick("2")}>2</button>
        <button onClick={() => handleDigitClick("3")}>3</button>
        <button onClick={() => handleOperationClick("x")}>x</button>
        <button onClick={() => handleDigitClick("4")}>4</button>
        <button onClick={() => handleDigitClick("5")}>5</button>
        <button onClick={() => handleDigitClick("6")}>6</button>
        <button onClick={() => handleOperationClick("+")}>+</button>
        <button onClick={() => handleDigitClick("7")}>7</button>
        <button onClick={() => handleDigitClick("8")}>8</button>
        <button onClick={() => handleDigitClick("9")}>9</button>
        <button onClick={() => handleOperationClick("-")}>-</button>
        <button onClick={() => handleDigitClick(".")}>.</button>
        <button onClick={() => handleDigitClick("0")}>0</button>
        <button className="span-two">=</button>
      </div>
    </>
  );
};

export default Calculator;
