import React, { useState } from 'react';
import Button from 'components/Button';
import Category from './Category';

const CategoryGroup = ({ name, content, odd }) => {
  const [contentOpen, setContentOpen] = useState(false);

  return (
    <div className={`container-fluid my-2 py-2 text-center ${odd && 'ask-rounds-bg'}`}>
      <div className='row text-center mt-3 mb-1'>
        <div className='col'>
          <h2 className='ask-nav text-white'>{ name }</h2>
        </div>
      </div>
      <div className='row mb-3'>
        <div className='col'>
          <Button onClick={ () => setContentOpen(!contentOpen) } text={`${contentOpen ? 'HIDE' : 'SHOW' } CATEGORIES`} />
        </div>
      </div>
      <div className={`ask-collapsible ${contentOpen && 'visible'}`} id='scienceCollapse'>
        <div>
          { content.map((category, i) => <Category color='light' name={ category } key={ i } />) }
        </div>
      </div>
    </div>
  );
}

export default CategoryGroup;