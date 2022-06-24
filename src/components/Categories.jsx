import React from 'react'

const Categories = ({activeIndex, setActiveIndex}) => {

  const categories = ["Все", "Мясные", "Вегатарианская", "Гриль", "Острые", "Закрытые"];
  return (
      <div className="categories">
        <ul>
          {categories.map((category, index) => (
              <li key={index} onClick={()=> setActiveIndex(index)} className={activeIndex === index? 'active':""}>{category}</li>
          ))}
        </ul>
      </div>
  )
}
export default Categories