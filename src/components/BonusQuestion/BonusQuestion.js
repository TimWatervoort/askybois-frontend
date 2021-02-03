import React from 'react';
import bonusQuestions from 'util/bonusQuestions';

const BonusQuestion = props => {
  const latestQuestion = bonusQuestions[bonusQuestions.length - 1];

  return (
    <div className='row p-3 ask-bq-body'>
        <div className='col'>
          <h3 className='ask-bq-heading my-5'>BONUS QUESTION { latestQuestion.date }</h3>
          <p className='ask-bq-question'>{ latestQuestion.content }</p>
          <p className='ask-bq-points mb-5'>1 POINT</p>
      </div>    
    </div>
  )
}

export default BonusQuestion;
