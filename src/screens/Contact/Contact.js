import React from 'react';

const Contact = ({ mode }) => {
  return (
    <div className={`ask-bg-${mode} container-fluid text-center py-5 ask-contact`}>
      <div className='row mb-5'>
        <div className='col'>
          <h1 className='ask-nav'>CONTACT</h1>
        </div>
      </div>

      <div className='row mb-2'>
        <div className='col'>
          <h2 className='ask-nav'>Want to book Askybois trivia?</h2>
        </div>
      </div>
      <div className='row mb-2'>
        <div className='col'>
          <h3 className='ask-text'>Right now, it's just me (Tim) running the show here in Colorado.</h3>          
        </div>
      </div>
      <div className='row mb-2'>
        <div className='col'>
          <h3 className='ask-text'>This all started as a way to hang out with friends during the COVID-19 pandemic lockdown, so I've been running it over Zoom.</h3>
        </div>
      </div>
      <div className='row mb-2'>
        <div className='col'>
          <h3 className='ask-text'>With venues reopening, I can also definitely run trivia live so long as masks are worn and social distancing guidelines are followed.</h3>
        </div>
      </div>
      <div className='row mb-auto'>
        <div className='col'>
          <h3 className='ask-text'>If you'd like me to run some trivia for you either live or over Zoom, please email me at</h3>
          <h3 className='ask-text'><strong>askybois.trivia@gmail.com</strong></h3>
        </div>
      </div>
    </div>
  )
}

export default Contact;
