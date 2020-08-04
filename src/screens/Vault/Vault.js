import React from 'react';
import Category from './Category';
import { 
  scienceCategories,
  entertainmentCategories,
  historyGeographyCategories,
  foodDrinkCategories,
  randomCategories
 } from 'util/categories';

const Vault = () => {
  return (
    <div>
      <div className='container-fluid my-5 text-center'>
        <div className='row'>
          <div className='col'>
            <h1 className='ask-nav'>VAULT</h1>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <h3 className='ask-nav'>At the moment, this page is just to see past categories. If you want one brought back, let me know! Hopefully, I'll have full presentation download links here soon.</h3>
          </div>
        </div>
      </div>

      <div className='container-fluid my-2 py-2 ask-rounds-bg text-center'>
        <div className='row text-center mt-3 mb-3'>
          <div className='col'>
            <h2 className='ask-nav text-white'>SCIENCE</h2>
          </div>
        </div>
        { scienceCategories.map((category, i) => <Category color='light' name={ category } key={ i } />) }
      </div>

      <div className='container-fluid my-2 py-2 text-center'>
        <div className='row text-center mt-3 mb-3'>
          <div className='col'>
            <h2 className='ask-nav'>ENTERTAINMENT</h2>
          </div>
        </div>
        { entertainmentCategories.map((category, i) => <Category color='black' name={ category } key={ i } />) }
      </div>

      <div className='container-fluid my-2 py-2 ask-rounds-bg text-center'>
        <div className='row text-center mt-3 mb-3'>
          <div className='col'>
            <h2 className='ask-nav text-white'>HISTORY AND GEOGRAPHY</h2>
          </div>
        </div>
        { historyGeographyCategories.map((category, i) => <Category color='light' name={ category } key={ i } />) }
      </div>

      <div className='container-fluid my-2 py-2 text-center'>
        <div className='row text-center mt-3 mb-3'>
          <div className='col'>
            <h2 className='ask-nav'>FOOD AND DRINK</h2>
          </div>
        </div>
        { foodDrinkCategories.map((category, i) => <Category color='black' name={ category } key={ i } />) }
      </div>

      <div className='container-fluid mt-2 py-2 ask-rounds-bg text-center'>
        <div className='row text-center mt-3 mb-3'>
          <div className='col'>
            <h2 className='ask-nav text-white'>RANDOM</h2>
          </div>
        </div>
        { randomCategories.map((category, i) => <Category color='light' name={ category } key={ i } />) }
      </div>
    </div>
  )
}

export default Vault;
