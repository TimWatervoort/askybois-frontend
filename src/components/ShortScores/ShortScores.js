import React from 'react';
import TopScoreEntry from 'components/TopScoreEntry';

const ShortScores = props => {

  const { mode } = props;

  return (
  <div className={`ask-bg-${mode} container-fluid text-center px-0`}>
    <div className='ask-nav text-white ask-rounds-bg py-3 mx-0'><h1>LAST WEEK'S HIGH SCORES</h1></div>

    <div className='row pt-3 mx-0 my-5'>
      <div className='col-md-6'>
        <h3 className='ask-nav ask-gold-text'>BEST NAME</h3>
        <h3 className='ask-text'>Alison's Harem</h3>
      </div>
      <div className='col-md-6'>
        <h3 className='ask-nav ask-gold-text'>BEST ANSWER</h3>
        <h3 className='ask-text'><span className='ask-nav'>Q: </span> What was the first electronic instrument called?</h3>
        <h3 className='ask-text'><span className='ask-nav'>A: </span> Kazoo</h3>
        <h3 className='ask-text'>- swampbuttthing</h3>
      </div>
    </div>

    <h3 className='ask-nav mx-0 ask-gold-text'>TOP THREE</h3>
    <div className='row py-3 mx-0'>
      <div className='col'>
        <div className='row px-0 text-center'>
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
        { props.scores.map((entry, i) => <TopScoreEntry key={ i } data={ entry } />) }
      </div>
    </div>
  </div>
  )
}

export default ShortScores;
