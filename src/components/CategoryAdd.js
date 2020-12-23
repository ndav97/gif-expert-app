import React, { useState } from 'react'
import PropTypes from 'prop-types';


export const CategoryAdd = ({setCategories}) => {
  const [inputvalue, setInputValue] = useState('');
  
  const handleInputChange= (e) => {
    setInputValue(e.target.value)
  }
  
  const handleSubmit= (e) => {
    e.preventDefault();
    if (inputvalue.length>0) {
      setCategories(val => [inputvalue, ...val]);
      setInputValue('');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={inputvalue}
        onChange={handleInputChange}
      />
    </form>
  )
}

CategoryAdd.prototype = {
  setCategories: PropTypes.func.isRequired
}
