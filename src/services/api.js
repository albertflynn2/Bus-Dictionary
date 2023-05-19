// api.js
import fetch from 'node-fetch';

const BASE_URL = 'http://localhost:3000'; // Replace with your API base URL

export { BASE_URL };

// Helper function to make an HTTP request
async function request(url, options = {}) {
  try {
    const response = await fetch(url, options);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong');
    }

    return data;
  } catch (error) {
    throw new Error(error.message || 'Something went wrong');
  }
}

// Get all terms
export async function getTerms() {
  const url = `${BASE_URL}/terms`;
  return request(url);
}

// Get a single term by ID
export async function getTermById(termId) {
  const url = `${BASE_URL}/terms/${termId}`;
  return request(url);
}

// Add a new term
export async function addTerm(termData) {
  const url = `${BASE_URL}/terms`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(termData),
  };
  return request(url, options);
}

// Update an existing term
export async function updateTerm(termId, termData) {
  const url = `${BASE_URL}/terms/${termId}`;
  const options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(termData),
  };
  return request(url, options);
}

// Delete a term
export async function deleteTerm(termId) {
  const url = `${BASE_URL}/terms/${termId}`;
  const options = {
    method: 'DELETE',
  };
  return request(url, options);
}
