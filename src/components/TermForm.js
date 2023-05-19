import React, { useState } from 'react';
import PropTypes from 'prop-types';

function TermForm({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Invoke the onSubmit callback with the form data
    onSubmit({ title, description });
    // Reset the form
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Term</button>
    </form>
  );
}

TermForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default TermForm;
