import React, {useState } from 'react';
import './App.css';
import PhoneInput from './PhoneInput';

function App() {
  const [value, setValue] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Your Phone Number is ${value}`);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <PhoneInput value={value} onChange={setValue} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
