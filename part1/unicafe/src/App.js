import React, { useState } from 'react'

const Button = (props) => <button onClick={props.handleClick}>{props.text}</button>;

const FeedBack = (props) => {
  return (
  <div>
    <h2>{props.info}</h2>
    <Button handleClick={props.good} text={'good'}></Button>
    <Button handleClick={props.neutral} text={'neutral'}></Button>
    <Button handleClick={props.bad} text={'bad'}></Button>  
  </div>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const total = () => good+neutral+bad;
  const average= () => total()/3;
  return (
    <div>
      <h1>statistics</h1> 
      <p>good {good}</p> 
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total()}</p>
      <p>average {average()}</p>
    </div>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1);
  }

  const handleNeutral = () => {
    setNeutral(neutral +1);
  }

  const handleBad = () => {
    setBad(bad +1);
  }

  return (
    <div>
      <FeedBack info="give feedback" good={handleGood} neutral={handleNeutral} bad={handleBad}/>
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App