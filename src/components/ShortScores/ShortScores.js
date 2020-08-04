import React from 'react';
import ScoreEntry from 'components/ScoreEntry';

const ShortScores = props => {
  return (
    <div className='text-center row my-5'>
      <div className='col'>
        <h1 className='ask-nav mb-3'>LAST WEEK'S HIGH SCORES</h1>
        <div className='card'>
          <div className='card-body p-0'>
            <div className='container-fluid'>
              <div className='row px-0 text-center'>

                <div style={{ borderRight: '1px solid rgba(0,0,0,.125)' }} className='col-6 py-3'>
                  <h5 className='ask-nav'><strong>Name</strong></h5>
                </div>
                <div style={{ borderRight: '1px solid rgba(0,0,0,.125)' }} className='col-3 py-3'>
                  <h5 className='ask-nav'><strong>Rank</strong></h5>
                </div>
                <div className='col-3 py-3'>
                  <h5 className='ask-nav'><strong>Score</strong></h5>
                </div>

              </div>
              { props.scores.map((entry, i) => <ScoreEntry key={ i } data={ entry } />) }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShortScores;
