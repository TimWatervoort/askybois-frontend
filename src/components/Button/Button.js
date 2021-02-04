import React from 'react';
import './Button.css';

const Button = ({ text, color, onClick }) => {

  const getColor = () => {
    if (!color) {
      return 'ask-button-default';
    } else {
      return `ask-button-${color}`
    }
  }

  return (
    <button className={`btn ask-nav ${ getColor() }`} onClick={ onClick }>
      { text }
    </button>
  )
}

export default Button;
