import React from 'react';
import ScoreEntry from 'components/ScoreEntry';

const ShortScores = props => {

  const { mode } = props;

  return (
  <div className={`ask-bg-${mode} container-fluid text-center px-0`}>
    <div className='ask-nav text-white ask-rounds-bg py-3 mx-0'><h1>LAST WEEK'S HIGH SCORES</h1></div>

    <div className='row pt-3 mx-0'>
      <div className='col'>
        <h3 className='ask-nav'>BEST NAME</h3>
        <h3 className='ask-text'>Eowyn is a simp for Aragorn</h3>
      </div>
    </div>

    <div className='row pt-3 my-5 mx-0'>
      <div className='col'>
        <h3 className='ask-nav'>BEST ANSWER</h3>
        <h3 className='ask-text'><span className='ask-nav'>Q: </span> What's Hiccup's dad's name?</h3>
        <h3 className='ask-text'><span className='ask-nav'>A: </span> Achoo</h3>
        <h3 className='ask-text'>- hairy hobbit hole</h3>
      </div>
    </div>

    <h3 className='ask-nav mx-0'>TOP THREE</h3>
    <div className='row p-3 mx-0'>
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
