import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const DropDownMenu = () => {
  return (
    <motion.div
      className=' row'
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className='col-4'>
        <ul>
          <Link to={'/category/elektronik'}><li>Alt Katagori 1</li></Link>
          <Link to={'/category/elektronik'}><li>Alt Katagori 2</li></Link>
          <Link to={'/category/elektronik'}><li>Alt Katagori 3</li></Link>
          <Link to={'/category/elektronik'}><li>Alt Katagori 4</li></Link>
          <Link to={'/category/elektronik'}><li>Alt Katagori 5</li></Link>
          <Link to={'/category/elektronik'}><li>Alt Katagori 6</li></Link>
          <Link to={'/category/elektronik'}><li>Alt Katagori 7</li></Link>

        </ul>
      </div>
 
      <div className="col-7">
        <img className='w-100' src="https://www.muratogluhome.com.tr/media/2024/06/21/206/a34b3a40-5f51-4de8-a6ae-e795edac0566.png" alt="img" />
      </div>
    </motion.div>
  );
};

export default DropDownMenu;
