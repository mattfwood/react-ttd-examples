import React, { useState } from 'react'

function PhoneInput({ value, onChange }) {
  const [error, setError] = useState(null);
  // check that input is only up to 10 numbers
  const regex = /^[0-9]{0,10}$/;

  function handleChange(e) {
    // only change input if value is a number
    if (regex.test(e.target.value)) {
      onChange(e.target.value);
      setError(null);
    } else {
      // @TODO: Make more specific error messages
      setError('Please Only Enter Numbers')
    }
  }

  return (
    <>
      <label htmlFor="phone-number">
        <input type="text" value={value} aria-label="phone-number" id="phone-number" onChange={handleChange} />

      </label>
      {error !== null && (
        <div className="error">{error}</div>
      )}
    </>
  )
}

export default PhoneInput;