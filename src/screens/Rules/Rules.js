import React from 'react';
import Rounds from './Rounds';
import Categories from './Categories';
import BonusRounds from './BonusRounds';
import './Rules.css';

const Rules = () => {
  return (
    <div>
      <div className='container mt-5'>
        <div className='row text-center mb-5'>
          <div className='col'>
            <h1 className='ask-nav'>HOW IT WORKS</h1>
          </div>
        </div>
      </div>

      <Rounds />
      <Categories />
      <BonusRounds />

      <div className='container-fluid text-center ask-darkest-hour-bg text-white pt-2 pb-4'>
        <div className='row py-2'>
          <div className='col'>
            <h2 className='ask-nav py-3'>ONE LAST CHANCE...SOMETIMES</h2>
          </div>
        </div>

        <div className='row'>
          <div className='col'>
            <h3 className='ask-darkest-hour'>THE DARKEST HOUR</h3>
          </div>
        </div>
        <div className='row mb-2'>
          <div className='col'>
            <h5 className='ask-text'>Be prepared to wager points and answer one brutally hard question. This final round shows up every now and then.</h5>
          </div>
        </div>
      </div>
    
  </div>
  )
}

export default Rules;
