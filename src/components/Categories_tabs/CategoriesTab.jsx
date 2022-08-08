import React from 'react'
import './categories.css';
function CategoriesTab({filteration,cat}) {

  return (
    <span onClick={()=>{filteration(cat)}} className="category">
        {cat}
    </span>
  )
}

export default CategoriesTab