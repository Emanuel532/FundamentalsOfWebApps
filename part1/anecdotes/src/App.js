import React, { useState } from 'react'

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const App = () => {
  const generateRandomNumber = (range) => Math.floor(Math.random() * range);
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
   
  const [selected, setSelected] = useState(generateRandomNumber(anecdotes.length));
  const [votes, setVotes] = useState(new Array(10+1).join('0').split('').map(parseFloat));

  const handleClick = () => setSelected(generateRandomNumber(anecdotes.length));
  const handleVote = () => {
    const addition = [...votes];
    addition[selected] += 1;
    setVotes(addition);
  };
  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button handleClick={handleVote} text='vote'></Button>
      <Button handleClick={handleClick} text='next anecdote' />
      <h1>Anecdote with most upvotes</h1> 
      <p>{anecdotes[votes.indexOf(Math.max(...votes))]}</p>
    </div>
  )
}//arr.indexOf(Math.max(...arr));

export default App