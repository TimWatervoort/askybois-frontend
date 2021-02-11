import React, { useState } from 'react';
import Button from 'components/Button';
import Category from './Category';

const CategoryGroup = ({ name, content, odd, buttonText, mode }) => {
  const [contentOpen, setContentOpen] = useState(false);

  const getBgColor = () => {
    if (odd) {
      return 'ask-rounds-bg';
    } else {
      return `ask-bg-${mode}`;
    }
  }

  return (
    <div className={`container-fluid pt-2 pb-4 text-center ${getBgColor()}`}>
      <div className='row text-center mt-3 mb-1'>
        <div className='col'>
          <h2 className={`ask-nav ${odd ? 'text-white' : 'text-black'}`}>{ name }</h2>
        </div>
      </div>
      <div className='row mb-3'>
        <div className='col'>
          <Button
            onClick={ () => setContentOpen(!contentOpen) }
            text={`${contentOpen ? 'HIDE' : 'SHOW' } ${ buttonText ? buttonText : 'CATEGORIES' }`}
          />
        </div>
      </div>
      <div className={`ask-collapsible ${contentOpen && 'visible'}`} id='scienceCollapse'>
        <div>
          { content.map((category, i) => <Category color={odd ? 'light' : 'black'} name={ category } key={ i } />) }
        </div>
      </div>
    </div>
  );
}

export default CategoryGroup;
