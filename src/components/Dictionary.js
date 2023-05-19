import React from 'react';
import TermList from './TermList';
import TermForm from './TermForm';

function Dictionary() {
  return (
    <div>
      <h1>Dictionary</h1>
      <TermForm />
      <TermList />
    </div>
  );
}

export default Dictionary;

