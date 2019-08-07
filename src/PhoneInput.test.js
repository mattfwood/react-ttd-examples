import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import PhoneInput from './PhoneInput'

afterEach(cleanup)

test('It should handle number inputs on change', () => {
  const { getByLabelText } = render(<PhoneInput />);
  const input = getByLabelText('phone-number');
  const sampleValue = '123';


  expect(input.value).toBe('');

  fireEvent.change(input, { target: { value: sampleValue } });

  expect(input.value).toBe(sampleValue);
});

test('it should ignore letter inputs', () => {
  const { getByLabelText } = render(<PhoneInput />);
  const input = getByLabelText('phone-number');
  const invalidValue = 'abc';
  const validValue = '123'

  expect(input.value).toBe('');

  fireEvent.change(input, { target: { value: invalidValue } });
  expect(input.value).toBe('');

  fireEvent.change(input, { target: { value: validValue } });

  expect(input.value).toBe(validValue);
});

test('it should display error message when non-number inputs are entered', () => {
  const { getByLabelText } = render(<PhoneInput />);
  const input = getByLabelText('phone-number');
  const invalidValue = 'abc';

  fireEvent.change(input, { target: { value: invalidValue } });

  const errorMessage = getByLabelText('error-message');

  expect(errorMessage.textContent).toEqual('Please Only Enter Numbers');
});

test('it should display length error message when more than 10 numbers are entered', () => {
  const { getByLabelText } = render(<PhoneInput />);
  const input = getByLabelText('phone-number');
  const invalidValue = '12345678901';

  fireEvent.change(input, { target: { value: invalidValue } });

  const errorMessage = getByLabelText('error-message');

  expect(errorMessage.textContent).toEqual('Please Enter Less Than 10 Numbers');
});