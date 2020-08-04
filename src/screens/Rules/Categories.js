import React from 'react';

const Categories = () => (
  <div className='container-fluid py-2 text-center'>
    <div className='row mt-5'>
      <div className='col'>
        <h2 className='ask-nav'>FIVE CATEGORIES</h2>
      </div>
    </div>
    <div className='row mb-3'>
      <div className='col'>
        <h5 className='ask-text'>One question per category per round.</h5>
      </div>
    </div>

    <div className='row'>
      <div className='col'>
        <h3 className='ask-category'>SCIENCE</h3>
      </div>
    </div>
    <div className='row mb-2'>
      <div className='col'>
        <h5 className='ask-text'>Anything from physics to psychology to logic to geology.</h5>
      </div>
    </div>

    <div className='row'>
      <div className='col'>
        <h3 className='ask-category'>ENTERTAINMENT</h3>
      </div>
    </div>
    <div className='row mb-2'>
      <div className='col'>
        <h5 className='ask-text'>Testing your knowledge of movies, music, TV, and games.</h5>
      </div>
    </div>

    <div className='row'>
      <div className='col'>
        <h3 className='ask-category'>HISTORY AND GEOGRAPHY</h3>
      </div>
    </div>
    <div className='row mb-2'>
      <div className='col'>
        <h5 className='ask-text'>Questions about population, mountains, battles, cultural development, and more!</h5>
      </div>
    </div>

    <div className='row'>
      <div className='col'>
        <h3 className='ask-category'>FOOD AND DRINK</h3>
      </div>
    </div>
    <div className='row mb-2'>
      <div className='col'>
        <h5 className='ask-text'>You may be surprised by how much you know about sandwiches, beer, sausages, and tea.</h5>
      </div>
    </div>

    <div className='row'>
      <div className='col'>
        <h3 className='ask-category'>RANDOM</h3>
      </div>
    </div>
    <div className='row mb-5'>
      <div className='col'>
        <h5 className='ask-text'>The end of the world? Strongman competitions? Dead memes? Anything is possible here.</h5>
      </div>
    </div>

  </div>
);

export default Categories;
