import React, { useState } from 'react'

function PhoneInput() {
  const [value, setValue] = useState('');
  const [error, setError] = useState(null);
  // check that input is only up to 10 numbers
  const regex = /^[0-9]{0,10}$/;

  function handleChange(e) {
    // only change input if value is a number
    if (regex.test(e.target.value)) {
      setValue(e.target.value);
      setError(null);
    } else {
      if (e.target.value.length > 10) {
        setError('Please Enter Less Than 10 Numbers');
      } else {
        // @TODO: Make more specific error messages
        setError('Please Only Enter Numbers')
      }
    }
  }

  return (
    <>
      <label htmlFor="phone-number">
        <input type="text" value={value} aria-label="phone-number" id="phone-number" onChange={handleChange} />

      </label>
      {error !== null && (
        <div className="error" aria-label="error-message">{error}</div>
      )}
    </>
  )
}

export default PhoneInput;