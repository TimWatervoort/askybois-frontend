import React from 'react';

const Category = ({ name, color }) => (
  <div className={`text-${color} row`}>
    <div className='col'>
      <h5 className='ask-nav'>{ name.toUpperCase() }</h5>
    </div>
  </div>
)

export default Category;
