import React from 'react'
import '../partials/partials.css'
const DropDownMenu = ({categoryName}) => {
 
  
  return (
    <div>
      <div className="dropdown">
        <button className="dropdown-button">
          {categoryName}
         </button>
        <div className="dropdown-content">
        <div className='row'>
          <div className='col-8'>
            <img className='category-main-image' src="https://vertacert.com/wp-content/uploads/2024/03/ELEKTRIKLI-EV-ALETLERI-VE-ELEKTRONIK-CIHAZLAR-CE-BELGESI-1024x1024.png" alt="" />
          </div>
        </div>
        </div>
      </div>


    </div>
  )
}

export default DropDownMenu