import React from 'react';
import LongScoreEntry from './LongScoreEntry';

const LastTimeScores = props => {
  return (
    <div className='container-fluid'>
      <div className='row text-center'>
        <div className='col'>
          <h3 className='py-3 ask-nav'>LAST TIME</h3>
        </div>
      </div>
      <div className='row px-0 text-center'>

        <div className='col-6 py-3'>
          <h5 className='ask-nav'><strong>Name</strong></h5>
        </div>
        <div className='col-3 py-3'>
          <h5 className='ask-nav'><strong>Rank</strong></h5>
        </div>
        <div className='col-3 py-3'>
          <h5 className='ask-nav'><strong>Score</strong></h5>
        </div>

      </div>
      { props.scores.map((entry, i) => <LongScoreEntry key={ i } data={ entry } />) }
    </div>
  )
}

export default LastTimeScores;
