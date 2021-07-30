import React, { useState } from 'react'

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const StatisticLine = ({ text, value }) => {
    return (
        <tr>
            <td>{text}</td>
            <td>{value}</td>
        </tr>
    )
}

const Statistics = ({ good, neutral, bad, clicks, score }) => {
    if (clicks > 0) {
        return (
            <div>
                <table>
                    <tbody>
                        <StatisticLine text="good" value={good} />
                        <StatisticLine text="neutral" value={neutral} />
                        <StatisticLine text="bad" value={bad} />
                        <StatisticLine text="all" value={clicks} />
                        <StatisticLine text="average" value={(score / clicks).toFixed(2)} />
                        <StatisticLine text="positive" value={((good / clicks) * 100).toFixed(2) + "%"} />
                    </tbody>
                </table>
            </div>
        )
    }
    else {
        return (
            <div>
                <p>No feedback given</p>
            </div>
        )
    }
}

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [clicks, setClicks] = useState(0)
    const [score, setScore] = useState(0)

    const buttonHandler = ( stateModifier, state ) => {
        stateModifier(state + 1)
        setClicks(clicks + 1)
        setScore(good * 1 + neutral * 0 + bad * -1)
    }

    return (
        <div>
            <h1>give feedback</h1>
            
            <Button handleClick={() => buttonHandler(setGood, good)} text="good" />
            <Button handleClick={() => buttonHandler(setNeutral, neutral)} text="neutral" />
            <Button handleClick={() => buttonHandler(setBad, bad)} text="bad" /> 

            <h1>statistics</h1>

            <Statistics good={good} bad={bad} neutral={neutral} clicks={clicks} score={score} />
        </div>
    )
}

export default App