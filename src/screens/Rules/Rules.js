import React from 'react';
import Rounds from './Rounds';
import Categories from './Categories';
import BonusRounds from './BonusRounds';
import './Rules.css';

const Rules = ({ mode }) => {
  return (
    <div className={`ask-bg-${mode}`}>
      <div className='container-fluid pt-5'>
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
            <h5 className='ask-text'>Be prepared to wager points and answer one brutally hard question.</h5>
          </div>
        </div>
        
        <div className='row'>
          <div className='col'>
            <h3 className='ask-devils-chalices'>THE DEVIL'S CHALICES</h3>
          </div>
        </div>
        <div className='row mb-2'>
          <div className='col'>
            <h5 className='ask-text'>One question. Five choices. You decide how many points it's worth.</h5>
          </div>
        </div>

        <div className='row'>
          <div className='col'>
            <h3 className='ask-illusion-of-time'>THE ILLUSION OF TIME</h3>
          </div>
        </div>
        <div className='row mb-2'>
          <div className='col'>
            <h5 className='ask-text'>Can you answer ten questions in 50 seconds?</h5>
          </div>
        </div>
      </div>

      <div className='container-fluid text-center ask-rounds-bg text-white pt-2 pb-4'>
        <div className='row py-2'>
          <div className='col'>
            <h2 className='ask-nav py-3'>OTHER STUFF</h2>
          </div>
        </div>

        <div className='row'>
          <div className='col'>
            <h3 className='ask-suffering'>THREE SPEED QUESTIONS</h3>
          </div>
        </div>
        <div className='row mb-2'>
          <div className='col'>
            <h5 className='ask-text'>Answer these simpler questions as fast as you can! Points for the first three to answer.</h5>
          </div>
        </div>

        <div className='row'>
          <div className='col'>
            <h3 className='ask-suffering'>BEST NAME</h3>
          </div>
        </div>
        <div className='row mb-2'>
          <div className='col'>
            <h5 className='ask-text'>Have a clever or hilarious name? You get points.</h5>
          </div>
        </div>

        <div className='row'>
          <div className='col'>
            <h3 className='ask-suffering'>BEST ANSWER</h3>
          </div>
        </div>
        <div className='row mb-2'>
          <div className='col'>
            <h5 className='ask-text'>If you have forsaken being correct for the sake of comedy, you will be rewarded.</h5>
          </div>
        </div>

        <div className='row'>
          <div className='col'>
            <h3 className='ask-suffering'>WARM-UP QUESTION</h3>
          </div>
        </div>
        <div className='row mb-2'>
          <div className='col'>
            <h5 className='ask-text'>Let's get things going with a 1-point fairly easy question.</h5>
          </div>
        </div>

        <div className='row'>
          <div className='col'>
            <h3 className='ask-suffering'>BONUS QUESTION</h3>
          </div>
        </div>
        <div className='row mb-2'>
          <div className='col'>
            <h5 className='ask-text'>One question right here at askybois.com.</h5>
          </div>
        </div>
        
      </div>
  </div>
  )
}

export default Rules;
