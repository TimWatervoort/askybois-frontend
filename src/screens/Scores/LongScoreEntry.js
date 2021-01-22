import React from 'react';

const ScoreEntry = props => {
  const { index, data: { name, rank, score } } = props;
  const background = index % 2 > 0 ? 'ask-secondary-bg' : 'ask-rounds-bg';

  return (
    <div className={`row px-0 pt-2 text-white text-center ${background}`}>

      <div className='col-6 py-3'>
        <h5 className='ask-text'>{ name }</h5>
      </div>
      <div className='col-3 py-3'>
        <h5 className='ask-text'>{ rank }</h5>
      </div>
      <div className='col-3 py-3'>
        <h5 className='ask-text'>{ score }</h5>
      </div>
    </div>
  )
}

export default ScoreEntry;
