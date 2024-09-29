import { useState } from 'react';
import './Hello.css';

function Hello() {
  const [message, setMessage] = useState('hello 22200356!!');

  const handleClick = () => {
    setMessage('Hello, World!');
  };

  return (
    <div id="hello">
      <p>{message}</p>
      <button onClick={handleClick}>Change Text</button>
    </div>
  );
}

export default Hello;
