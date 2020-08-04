import React from 'react';
import WinEntry from './WinEntry';

const WinScores = props => {
  return (
    <div className='container-fluid'>
      <div className='row text-center'>
        <div className='col'>
          <h3 className='py-3 ask-nav'>WINS</h3>
        </div>
      </div>
      <div className='row px-0 text-center'>

        <div className='col-8 py-3'>
          <h5 className='ask-nav'><strong>Name</strong></h5>
        </div>
        <div className='col-4 py-3'>
          <h5 className='ask-nav'><strong>Wins</strong></h5>
        </div>

      </div>
      { props.scores.map((entry, i) => <WinEntry key={ i } data={ entry } />) }
    </div>
  )
}

export default WinScores;
