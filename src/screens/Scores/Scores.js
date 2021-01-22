import React from 'react';
import LastTimeScores from './LastTimeScores';
import scores from 'util/scores';

const Scores = props => {
  const { mode } = props;

  return (
    <div className={`container-fluid text-center ask-full-page ask-bg-${mode} ${mode === 'light' ? 'text-black' : 'text-white'}`}>
      <div className='row py-5'>
        <div className='col'>
          <h1 className='ask-nav'>SCORES</h1>
        </div>
      </div>
     <LastTimeScores mode={mode} scores={ scores.sort((x, y) => y.score - x.score) }/>
    </div>
  )
}

export default Scores;
