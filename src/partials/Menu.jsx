
import React, { useState } from 'react';
import '../partials/partials.css'
import DropDownMenu from './DropDownMenu';

const Menu = ({ categoryName, categories }) => {
  const [openCategory, setOpenCategory] = useState(null);

  const toggleCategory = (index) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  return (
    <div className="menu-container d-flex" >
      {categories.map((category, index) => (
        <div key={index} className="menu-item">
          <button className="dropbtn" onClick={() => toggleCategory(index)}>
            {category.name}
          </button>
          {openCategory === index && (
            <div  className="menu-dropdown">
                   <DropDownMenu onMauseLeave={toggleCategory}></DropDownMenu> 
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Menu;

 
 