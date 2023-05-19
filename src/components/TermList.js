import TermDetails from './TermDetails';
import { getTerms } from '../services/api';
import React, { useState, useEffect } from 'react';

function TermList() {
  const [terms, setTerms] = useState([]);

  useEffect(() => {
    const fetchTerms = async () => {
      try {
        const fetchedTerms = await getTerms();
        setTerms(fetchedTerms);
      } catch (error) {
        console.error('Failed to fetch terms:', error);
      }
    };

    fetchTerms();
  }, []);

  return (
    <div>
      <h2>Term List</h2>
      {terms.map((term) => (
        <TermDetails key={term.id} termId={term.id} />
      ))}
    </div>
  );
}

export default TermList;
