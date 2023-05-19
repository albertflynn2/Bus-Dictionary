import React, { useEffect, useState } from 'react';
import TermDetails from './TermDetails';

function TermApprovalList() {
  const [terms, setTerms] = useState([]);

  useEffect(() => {
    // Fetch terms awaiting approval from the backend
    fetchTermsAwaitingApproval();
  }, []);

  const fetchTermsAwaitingApproval = () => {
    // Make an API call to fetch terms awaiting approval
    // Replace the placeholder URL with your backend API endpoint
    fetch('https://api.example.com/terms/approval')
      .then((response) => response.json())
      .then((data) => setTerms(data))
      .catch((error) => console.error(error));
  };

  const approveTerm = (termId) => {
    // Make an API call to approve the term with the given termId
    // Replace the placeholder URL with your backend API endpoint
    fetch(`https://api.example.com/terms/approve/${termId}`, { method: 'PUT' })
      .then((response) => {
        if (response.ok) {
          // Term approved successfully, update the term list
          const updatedTerms = terms.filter((term) => term.id !== termId);
          setTerms(updatedTerms);
        } else {
          throw new Error('Failed to approve term');
        }
      })
      .catch((error) => console.error(error));
  };

  const rejectTerm = (termId) => {
    // Make an API call to reject the term with the given termId
    // Replace the placeholder URL with your backend API endpoint
    fetch(`https://api.example.com/terms/reject/${termId}`, { method: 'PUT' })
      .then((response) => {
        if (response.ok) {
          // Term rejected successfully, update the term list
          const updatedTerms = terms.filter((term) => term.id !== termId);
          setTerms(updatedTerms);
        } else {
          throw new Error('Failed to reject term');
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h1>Term Approval List</h1>
      {terms.length === 0 ? (
        <p>No terms awaiting approval.</p>
      ) : (
        terms.map((term) => (
          <div key={term.id}>
            <TermDetails term={term} />
            <button onClick={() => approveTerm(term.id)}>Approve</button>
            <button onClick={() => rejectTerm(term.id)}>Reject</button>
          </div>
        ))
      )}
    </div>
  );
}

export default TermApprovalList;

