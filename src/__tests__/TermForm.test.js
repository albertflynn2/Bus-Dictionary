import React from 'react';
import { render } from '@testing-library/react';
import TermForm from '../components/TermForm';

test('renders TermForm component', () => {
  render(<TermForm onSubmit={() => {}} />);
  // Add your assertions here
});
