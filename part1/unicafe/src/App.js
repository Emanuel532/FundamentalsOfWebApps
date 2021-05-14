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

const Statistic = ({text, value}) => {
  return (
    <tr>
      <th>{text}</th>
      <th>{value}</th>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const total = () => good+neutral+bad;
  const average= () => (good-bad)/total();
  const positive = () => good/total();
  if(good!==0 || neutral !== 0 || bad !== 0) {
    return (
      <div>
        <h1>statistics</h1>
        <table>
          <tbody>
          <Statistic text="good" value={good} />
          <Statistic text="neutral" value={neutral} />
          <Statistic text="bad" value={bad} />
          <Statistic text="all" value={total()} />
          <Statistic text="average" value={average()} />
          <Statistic text="positive" value={positive()} />
          </tbody>
        </table>
      </div>
    ) } else {
      return (
        <div>
          <h1>statistics</h1>
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