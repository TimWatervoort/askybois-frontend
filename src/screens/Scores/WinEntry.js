import React from 'react';

const WinEntry = props => {
  const { data: { name, wins } } = props

  return (
    <div style={{ borderTop: '1px solid rgba(0,0,0,.125)' }} className='row px-0 text-center'>

      <div className='col-8 py-3'>
        <h5 className='ask-text'>{ name }</h5>
      </div>
      <div className='col-4 py-3'>
        <h5 className='ask-text'>{ wins }</h5>
      </div>
    </div>
  )
}

export default WinEntry;
