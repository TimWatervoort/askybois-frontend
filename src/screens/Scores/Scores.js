import React, { useState } from 'react';
import LastTimeScores from './LastTimeScores';
import WinScores from './WinScores';
import scores from 'util/scores';
import wins from 'util/wins';

const Scores = props => {
  const [mode, setMode] = useState('lastTime');

  return (
    <div className='container'>
      <div className='row my-5'>
        <div className='col'>
          <h1 className='ask-nav'>SCORES</h1>
        </div>
      </div>
      <div className='row mb-5 text-center'>
        <div className='col'>
          <button onClick={() => setMode('lastTime')} className='btn btn-dark ask-scores-btn'>Last Time</button>
        </div>
        <div className='col'>
          <button onClick={() => setMode('wins')} className='btn btn-dark ask-scores-btn'>Wins</button>
        </div>
      </div>
      { mode === 'lastTime' && <LastTimeScores scores={ scores }/> }
      { mode === 'wins' && <WinScores scores={ wins }/> }
    </div>
  )
}

export default Scores;
