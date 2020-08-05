import React from 'react';
import ScoreEntry from 'components/ScoreEntry';

const ShortScores = props => {

  const { mode } = props;

  return (
  <div className='container-fluid'>
    <div className='text-center row my-5'>
      <div className='col'>
        <h1 className='ask-nav mb-3'>LAST WEEK'S HIGH SCORES</h1>
      </div>
    </div>

    <div className='row'>
      <div className='col'>
        <h3 className='ask-nav'>BEST NAME</h3>
        <h3 className='ask-text'>A Band Called Colonoscopy</h3>
      </div>
    </div>

    <div className='row mt-3 mb-5'>
      <div className='col'>
        <h3 className='ask-nav'>BEST ANSWER</h3>
        <h3 className='ask-text'><span className='ask-nav'>Q: </span> In Linguistics, what is the name for the study of words?</h3>
        <h3 className='ask-text'><span className='ask-nav'>A: </span> Linguistics</h3>
        <h3 className='ask-text'>- The Phoenix Queen</h3>
      </div>
    </div>

    <div className='row pb-2'>
      <div className='col'>
        <div className={`card ask-bg-${mode}`}>
          <div className={`card-body p-0 ask-bg-${mode}`}>
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
  </div>
  )
}

export default ShortScores;
