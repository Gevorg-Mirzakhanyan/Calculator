import React, { useState } from 'react';
import './Calculator.css';
const Calculator = () => {
    const [displayValue, setDisplayValue] = useState<string>('0');
    const [operator, setOperator] = useState<string | null>(null);
    const [firstValue, setFirstValue] = useState('');
    const buttons = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', 'C', '=', '+'];


    const handerNumberInput = (num: string) => {
        if (displayValue === '0') {
            setDisplayValue(num.toString())
        } else {
            setDisplayValue(displayValue + num)
        }
    }

    const handleOpratorInput = (operator: string | null) => {
        setOperator(operator);
        setFirstValue(displayValue);
        setDisplayValue('0');
    }

    const handleClear = () => {
        setDisplayValue('0');
        setOperator(null);
        setFirstValue('');
    };

    const handleCalculate = () => {
        const num1 = parseFloat(firstValue);
        const num2 = parseFloat(displayValue)

        if (operator === '+') {
            setDisplayValue((num1 + num2).toString());
        } else if (operator === '-') {
            setDisplayValue((num1 - num2).toString());
        } else if (operator === '*') {
            setDisplayValue((num1 * num2).toString());
        } else if (operator === '/') {
            setDisplayValue((num1 / num2).toString());
        }

        setOperator(null)
        setFirstValue('')
    };

    return (
        <div className="calculator">
            <div className="input">{displayValue}</div>
            <div className="buttons">
                {buttons.map((button) => (
                    <button key={button} onClick={() => button === 'C' ? handleClear() : button === '=' ? handleCalculate()
                        : button === ('+') ? handleOpratorInput(button) : button === ('-') ? handleOpratorInput(button)
                            : button === ('/') ? handleOpratorInput(button) : button === ('*') ? handleOpratorInput(button)
                                : handerNumberInput(button)}>
                        {button}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Calculator;