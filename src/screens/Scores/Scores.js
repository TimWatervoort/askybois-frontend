import React, { useState } from 'react';
import LastTimeScores from './LastTimeScores';
import WinScores from './WinScores';
import scores from 'util/scores';
import wins from 'util/wins';

const Scores = props => {
  const { mode } = props;
  const [type, setType] = useState('lastTime');

  return (
    <div className={`container-fluid text-center ask-bg-${mode} ${mode === 'light' ? 'text-black' : 'text-white'}`}>
      <div className='row py-5'>
        <div className='col'>
          <h1 className='ask-nav'>SCORES</h1>
        </div>
      </div>
      <div className='row pb-5 text-center'>
        <div className='col'>
          <button onClick={() => setType('lastTime')} className={`btn btn-${mode === 'light' ? 'info' : 'dark'} ask-scores-btn`}>Last Time</button>
        </div>
        <div className='col'>
          <button onClick={() => setType('wins')} className={`btn btn-${mode === 'light' ? 'info' : 'dark'} ask-scores-btn`}>Wins</button>
        </div>
      </div>
      { type === 'lastTime' && <LastTimeScores scores={ scores.sort((x, y) => y.score - x.score) }/> }
      { type === 'wins' && <WinScores scores={ wins.sort((x, y) => y.wins - x.wins) }/> }
    </div>
  )
}

export default Scores;
