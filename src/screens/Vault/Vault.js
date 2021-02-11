import React from 'react';
import CategoryGroup from './CategoryGroup';
import { 
  scienceCategories,
  entertainmentCategories,
  historyGeographyCategories,
  foodDrinkCategories,
  randomCategories
 } from 'util/categories';
import bonusQuestions from 'util/bonusQuestions';
import './Vault.css';

const Vault = ({ mode }) => {

  return (
    <div className={`ask-bg-${mode} ask-full-page`}>
      <div className='container-fluid text-center'>
        <div className='row py-5'>
          <div className='col'>
            <h1 className='ask-nav'>VAULT</h1>
          </div>
        </div>
        <div className='row mb-0 pt-4 pb-3 ask-bq-body'>
          <div className='col'>
            <h3 className='ask-nav'>SEE THE PAST</h3>
          </div>
        </div>
      </div>

      <CategoryGroup name='SCIENCE' mode={mode} content={scienceCategories} odd />
      <CategoryGroup name='ENTERTAINMENT' mode={mode} content={entertainmentCategories} />
      <CategoryGroup name='HISTORY AND GEOGRAPHY' mode={mode} content={historyGeographyCategories} odd />
      <CategoryGroup name='FOOD AND DRINK' mode={mode} content={foodDrinkCategories} />
      <CategoryGroup name='RANDOM' mode={mode} content={randomCategories} odd/>
      <CategoryGroup name='BONUS QUESTIONS' mode={mode} content={bonusQuestions.map(bq => bq.content)} buttonText='QUESTIONS' />

    </div>
  )
}

export default Vault;
