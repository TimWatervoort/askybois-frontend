import React from 'react';
import CategoryGroup from './CategoryGroup';
import { 
  scienceCategories,
  entertainmentCategories,
  historyGeographyCategories,
  foodDrinkCategories,
  randomCategories
 } from 'util/categories';
 import './Vault.css';

const Vault = ({ mode }) => {

  return (
    <div className={`ask-bg-${mode}`}>
      <div className='container-fluid py-5 text-center'>
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

      <CategoryGroup name='SCIENCE' content={scienceCategories} odd />
      <CategoryGroup name='ENTERTAINMENT' content={entertainmentCategories} />
      <CategoryGroup name='HISTORY AND GEOGRAPHY' content={historyGeographyCategories} odd />
      <CategoryGroup name='FOOD AND DRINK' content={foodDrinkCategories} />
      <CategoryGroup name='RANDOM' content={randomCategories} odd />
    </div>
  )
}

export default Vault;
