import React from 'react';

const Rounds = () => (
    <div className='container-fluid py-2 ask-rounds-bg text-center'>
      <div className='row text-center mt-5 mb-3'>
        <div className='col'>
          <h2 className='ask-nav text-white'>THREE MAIN ROUNDS</h2>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <h3 className='ask-pain'>PAIN</h3>
        </div>
      </div>
      <div className='row mb-2'>
        <div className='col'>
          <h5 className='ask-text text-white'>The easiest round, technically. Most questions are 2 points.</h5>
        </div>
      </div>

      <div className='row'>
        <div className='col'>
          <h3 className='ask-suffering'>SUFFERING</h3>
        </div>
      </div>
      <div className='row mb-2'>
        <div className='col'>
          <h5 className='ask-text text-white'>Designed with the phrase "oh, I think I've heard of this" in mind. Most questions are 4 points.</h5>
        </div>
      </div>

      <div className='row'>
        <div className='col'>
          <h3 className='ask-torment'>TORMENT</h3>
        </div>
      </div>
      <div className='row mb-5'>
        <div className='col'>
          <h5 className='ask-text text-white'>Dig deep and maybe you'll find the answer, who knows? Most questions are 6 points.</h5>
        </div>
      </div>
    </div>
);

export default Rounds;
