import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getTermById } from '../services/api'; // Assuming you have an API function to fetch term data

function TermDetails({ termId }) {
  const [term, setTerm] = useState(null);

  useEffect(() => {
    // Fetch term data when the termId prop changes
    if (termId) {
      getTermById(termId)
        .then((response) => setTerm(response.data))
        .catch((error) => console.error(error));
    }
  }, [termId]);

  if (!term) {
    return <div>Loading term details...</div>;
  }

  return (
    <div>
      <h2>{term.title}</h2>
      <p>{term.description}</p>
      {/* Additional term details */}
    </div>
  );
}

TermDetails.propTypes = {
  termId: PropTypes.number.isRequired,
};

export default TermDetails;
