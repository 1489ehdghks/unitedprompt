import React from 'react';
import { Link } from 'react-router-dom';

const WritingButton = () => {
    
  return (
    <Link to="/writing">
      <button>Write Something</button>
    </Link>
  );
}

export default WritingButton;


