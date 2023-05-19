import styled from 'styled-components';

// Define the color palette
const colors = {
  primary: '#007BFF',
  secondary: '#6C757D',
  background: '#F8F9FA',
  text: '#333333',
};

// Define the font styles
const fonts = {
  heading: "'Montserrat', sans-serif",
  body: "'Roboto', sans-serif",
};

// Styled components
export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
`;

export const Heading = styled.h1`
  font-family: ${fonts.heading};
  font-size: 24px;
  font-weight: 700;
  color: ${colors.primary};
`;

export const Subheading = styled.h2`
  font-family: ${fonts.heading};
  font-size: 20px;
  font-weight: 600;
  color: ${colors.secondary};
`;

export const Text = styled.p`
  font-family: ${fonts.body};
  font-size: 16px;
  line-height: 1.5;
  color: ${colors.text};
`;

export const Button = styled.button`
  font-family: ${fonts.body};
  font-size: 16px;
  font-weight: 500;
  color: #fff;
  background-color: ${colors.primary};
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Input = styled.input`
  font-family: ${fonts.body};
  font-size: 16px;
  padding: 10px;
  border: 1px solid ${colors.secondary};
  border-radius: 4px;
  color: ${colors.text};

  &:focus {
    outline: none;
    border-color: ${colors.primary};
    box-shadow: 0 0 0 2px ${colors.primary}80;
  }
`;

export const ErrorText = styled.p`
  font-family: ${fonts.body};
  font-size: 14px;
  color: red;
`;

export const SuccessText = styled.p`
  font-family: ${fonts.body};
  font-size: 14px;
  color: green;
`;
