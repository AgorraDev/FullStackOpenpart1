import React from "react";
import { useState } from 'react'

const Button = ({handler, text}) => {
  return (
    <>
    <button onClick={handler}>{text}</button>
    </>
  )
}

const MostVoted = ({highest, anecdotes}) => {
  console.log(highest);
  
  return (
    <div>
      <h1>Top voted anecdote</h1>
      <div>
      {anecdotes[highest]}
      </div>
    </div>
  )
}

const App = () => {

  const randomSelect = (max) => {
    let random = Math.floor(Math.random() * max)
    return (
    random,
    setSelected(random)
    )
  }
  const handleVote = (selected) => {
    
    const voteCount = [...votes]
    voteCount[selected] +=1
    setVotes(voteCount)
    return setVotes
  }

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([0,0,0,0,0,0,0,0])
  
  const mostVotes = Math.max(...votes)
  const index = votes.indexOf(mostVotes)

  if (mostVotes === 0) {

  return (
    <>
    <h1>Random Anecdote</h1>
    <div>
      {anecdotes[selected]}
      <br></br>
      has {votes[selected]} votes.
    </div>
    <Button handler={() => randomSelect(anecdotes.length)} text={'Random'} /> 
    <Button handler={() => handleVote(selected)} text={'Vote'} />
    </>
  )
  }

  return (
    <>
    <h1>Random Anecdote</h1>
    <div>
      {anecdotes[selected]}
      <br></br>
      has {votes[selected]} votes.
    </div>
    <Button handler={() => randomSelect(anecdotes.length)} text={'Random'} /> 
    <Button handler={() => handleVote(selected)} text={'Vote'} />
    
    <MostVoted highest={index} anecdotes={anecdotes} />
    </>
  )
}

export default App