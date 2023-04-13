import React, { useState } from 'react';

const WritingPage = () => {
  const [text, setText] = useState('');

  const handleInputChange = (event) => {
    setText(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(text); // Do something with the text
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Write something:
        <input type="text" value={text} onChange={handleInputChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default WritingPage;
