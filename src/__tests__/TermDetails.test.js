import React from 'react';
import { render } from '@testing-library/react';
import TermDetails from '../components/TermDetails';

test('renders TermDetails component', () => {
  render(<TermDetails termId={1} />);
  // Add your assertions here
});
