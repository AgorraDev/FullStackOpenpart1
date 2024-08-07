import React from 'react'
import { useState } from 'react'


//When button clicked --> setState to += 1

const average = (total) => total / 3


const Button = ({handleFeedback, text}) => <button onClick={handleFeedback}>{text}</button>

const Statistics = ({text, state}) => <p>{text} {state}</p>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleFeedback={() => setGood(good + 1)} text={'Good'}/>
      <Button handleFeedback={() => setNeutral(neutral + 1)} text={'Neutral'}/>
      <Button handleFeedback={() => setBad(bad + 1)} text={'Bad'}/>

      <h1>Statistics</h1>
      <Statistics text={'Good'} state={good} />
      <Statistics text={'Neutral'} state={neutral} />
      <Statistics text={'Bad'} state={bad} />
      <Statistics text={'Total'} state={good + neutral + bad} />
      <Statistics text={'Average'} state={average(good + -bad)} />
      <Statistics text={'Positive %'} state={good} />
    </div>
  )
}

export default App
