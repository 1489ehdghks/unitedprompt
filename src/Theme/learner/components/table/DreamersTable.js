import React, { useState } from 'react';

const DreamersTable = () => {
  const [texts, setTexts] = useState([]);

  return (
    <div>
      <h2>View Texts</h2>
      <table>
        <thead>
          <tr>
            <th>Text</th>
          </tr>
        </thead>
        <tbody>
          {texts.map((text, index) => (
            <tr key={index}>
              <td>{text}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DreamersTable;
