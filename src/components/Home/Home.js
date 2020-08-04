import React from 'react';
import BonusQuestion from 'components/BonusQuestion';
import ShortScores from 'components/ShortScores';

const Home = props => {

  const scores = [
    { name: 'Ben', rank: 1, score: 73 },
    { name: 'Alison', rank: 2, score: 60.5},
    { name: 'I wanna throw Tom Cruise into a volcano', rank: 3, score: 58 }
  ]

  return (
    <div className='container-fluid text-center mt-5'>
      <div className='row'>
        <div className='col'>
          <h1 className='ask-greeting'>Welcome to Askybois</h1>
          <h5 className='ask-text'>askyboi | æskibɔɪ (n) - An interrogative sentence or clause.</h5>
          <p style={{ fontSize: '2em' }} className='ask-nav my-5'>BRINGING SCIENCE AND MEMES TO THE FOREFRONT OF TRIVIA</p>
        </div>
      </div>
      <BonusQuestion />
      <ShortScores scores={ scores } />
    </div>
  )
}

export default Home;
