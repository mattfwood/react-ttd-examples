import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import PhoneInput from '../src/PhoneInput'

afterEach(cleanup)

test('It should handle number inputs on change', () => {
  const { getByLabelText } = render(<PhoneInput />);
});