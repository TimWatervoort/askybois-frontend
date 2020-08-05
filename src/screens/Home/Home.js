import React from 'react';
import BonusQuestion from 'components/BonusQuestion';
import ShortScores from 'components/ShortScores';
import scores from 'util/scores';

const Home = ({ mode }) => {

  return (
    <div className={`container-fluid text-center pt-5 ${ mode === 'light' ? 'bg-white text-black' : 'ask-bg-dark text-white' }`}>
      <div className='row'>
        <div className='col'>
          <h1 className='ask-greeting'>Welcome to Askybois</h1>
          <h5 className='ask-text'>askyboi | æskibɔɪ (n) - An interrogative sentence or clause.</h5>
          <p style={{ fontSize: '2em' }} className='ask-nav my-5'>BRINGING SCIENCE AND MEMES TO THE FOREFRONT OF TRIVIA</p>
        </div>
      </div>
      <BonusQuestion />
      <ShortScores mode={ mode } scores={ scores.slice(0,3) } />
    </div>
  )
}

export default Home;
