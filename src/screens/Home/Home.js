import React from 'react';
import BonusQuestion from 'components/BonusQuestion';
import ShortScores from 'components/ShortScores';
import scores from 'util/scores';
import { bestNameAwards, bestAnswerAwards } from 'util/awards';

const Home = ({ mode }) => {

  return (
  <div>
    <div className={`container-fluid text-center pt-5 ask-bg-${mode}`}>
      <div className='row'>
        <div className='col'>
          <h1 className='ask-greeting'>Welcome to Askybois</h1>
          <h5 className='ask-text'>askyboi | æskibɔɪ (n) - An interrogative sentence or clause.</h5>
          <p style={{ fontSize: '2em' }} className='ask-nav my-5'>BRINGING SCIENCE AND MEMES TO THE FOREFRONT OF TRIVIA</p>
        </div>
      </div>
      <BonusQuestion />
    </div>
    <ShortScores
      mode={ mode }
      scores={ scores.filter(score => score.rank < 4) }
      bestNameAwards={ bestNameAwards }
      bestAnswerAwards={ bestAnswerAwards }
    />
  </div>
  )
}

export default Home;
