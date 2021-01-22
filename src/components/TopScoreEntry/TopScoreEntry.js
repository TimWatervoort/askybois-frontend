import React from 'react';

const TopScoreEntry = props => {
  const { data: { name, rank, score } } = props;
  const rankBackgrounds = [
    'gold',
    'silver',
    'bronze',
  ];

  return (
    <div className={`row px-0 pt-2 text-center ask-${rankBackgrounds[rank - 1]}-bg`}>
      <div className='col-6 py-3'>
        <h5 className='ask-text'><strong>{ name }</strong></h5>
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

export default TopScoreEntry;
