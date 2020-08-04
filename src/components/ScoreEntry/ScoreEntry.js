import React from 'react';

const ScoreEntry = props => {
  const { data: { name, rank, score } } = props;

  return (
    <div style={{ borderTop: '1px solid rgba(0,0,0,.125)' }} className='row px-0 text-center'>

      <div style={{ borderRight: '1px solid rgba(0,0,0,.125)' }} className='col-6 py-3'>
        <h5 className='ask-text'>{ name }</h5>
      </div>
      <div style={{ borderRight: '1px solid rgba(0,0,0,.125)' }} className='col-3 py-3'>
        <h5 className='ask-text'>{ rank }</h5>
      </div>
      <div className='col-3 py-3'>
        <h5 className='ask-text'>{ score }</h5>
      </div>
    </div>
  )
}

export default ScoreEntry;
