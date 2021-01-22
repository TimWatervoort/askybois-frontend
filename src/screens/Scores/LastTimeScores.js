import React from 'react';
import LongScoreEntry from './LongScoreEntry';

const LastTimeScores = props => {
  return (
    <div className='container-fluid px-0'>
      <div className='ask-time-body pt-2 row mx-3'>
        <div className='col text-left ml-5'>
          <h2 className='py-3 ask-nav'>LAST TIME ON ASKYBOIS...</h2>
        </div>
      </div>
      <div className='row px-0 my-3 text-center'>

        <div className='col-6 py-3'>
          <h3 className='ask-nav'><strong>NAME</strong></h3>
        </div>
        <div className='col-3 py-3'>
          <h3 className='ask-nav'><strong>RANK</strong></h3>
        </div>
        <div className='col-3 py-3'>
          <h3 className='ask-nav'><strong>SCORE</strong></h3>
        </div>

      </div>
      { props.scores.map((entry, i) => <LongScoreEntry index={ i } key={ i } data={ entry } />) }
    </div>
  )
}

export default LastTimeScores;
