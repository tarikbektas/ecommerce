import React, { useState } from 'react'
import { SfAccordionItem, SfCounter, SfListItem, SfThumbnail, SfIconChevronLeft } from '@storefront-ui/react';
import classNames from 'classnames';

const ProductFilter = () => {
    const colorValues = [
        {
          id: 'c1',
          label: 'Primary',
          value: 'bg-primary-500',
          counter: 10,
        },
        {
          id: 'c2',
          label: 'Black and gray',
          value: 'bg-[linear-gradient(-45deg,#000_50%,#d1d5db_50%)]',
          counter: 5,
        },
        {
          id: 'c3',
          label: 'Violet',
          value: 'bg-violet-500',
          counter: 0,
        },
        {
          id: 'c4',
          label: 'Red',
          value: 'bg-red-500',
          counter: 2,
        },
        {
          id: 'c5',
          label: 'Yellow',
          value: 'bg-yellow-500',
          counter: 100,
        },
        {
          id: 'c6',
          label: 'Avocado',
          value: 'bg-gradient-to-tr from-yellow-300 to-primary-500',
          counter: 14,
        },
      ];    
      const [colorList, setColorList] = useState([]);
      const [opened, setOpened] = useState(true);
      const handleColorSelection = (val) => {
        if (colorList.indexOf(val) > -1) {
          setColorList([...colorList.filter((value) => value !== val)]);
        } else {
          setColorList([...colorList, val]);
        }
      };
    
      const isColorSelected = (val) => colorList.includes(val)
  return (
    
   
   <div>
    <h5>Filtre Alanı</h5>
   </div>
  )
}

export default ProductFilter