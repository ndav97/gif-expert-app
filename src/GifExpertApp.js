import React, {useState} from 'react'
import { CategoryAdd } from './components/CategoryAdd';
import { GifGrid } from './components/GifGrid';
import "./index.css";


export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One punch']);

  return (
    <>
      <h2>GifExpertApp</h2>
      <CategoryAdd setCategories={setCategories}/>
      <hr></hr>
      <div>
        {
          categories.map(category=>
            <GifGrid 
              category={category} 
              key={category}
            />
          )
        }
      </div>
    </>
  )
}
