import React from 'react'
import { useState } from 'react'


const average = (good, bad, neutral) => {
  const total = good + bad + neutral;
  if (total == 0) {
    return 0; 
  }
  return(
    (good - bad) / total
  )

}
const positivePercentage = (good, total) => {
  
  if (total == 0) {
    return 0;
  }
  return (
  (good/total) * 100
  )
}

const Button = ({handleFeedback, text}) => <button onClick={handleFeedback}>{text}</button>

const StatLine = ({name, props}) => {

  return (
    <>
    <tr><td>{name}:</td> <td>{props}</td></tr>
    </>
  )

}

const Statistics = ({good, bad, neutral}) => { 

  return (
    <>
    <h1>Statistics</h1>
    <table>
      <tbody>
        <StatLine name={'Good'} props={good} />
        <StatLine name={'Neutral'} props={neutral} />
        <StatLine name={'Bad'} props={bad} />
        <StatLine name={'Total'} props={good + bad + neutral} />
        <StatLine name={'Average'} props={average(good, bad, neutral)} />
        <StatLine name={'Positive %'} props={positivePercentage(good, (good + neutral + bad))} />
      </tbody>
    </table>
    </>
  )
}


const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  if (good + bad + neutral == 0) {
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleFeedback={() => setGood(good + 1)} text={'Good'}/>
      <Button handleFeedback={() => setNeutral(neutral + 1)} text={'Neutral'}/>
      <Button handleFeedback={() => setBad(bad + 1)} text={'Bad'}/>

      <p>No feedback given.</p>
    </div>
    )}
    return (
      <div>
      <h1>Give Feedback</h1>
      <Button handleFeedback={() => setGood(good + 1)} text={'Good'}/>
      <Button handleFeedback={() => setNeutral(neutral + 1)} text={'Neutral'}/>
      <Button handleFeedback={() => setBad(bad + 1)} text={'Bad'}/>
  
      <Statistics good={good} neutral={neutral} bad={bad}/>
      </div>
       ) 
  }

export default App
