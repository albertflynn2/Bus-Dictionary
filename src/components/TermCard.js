import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CardContainer = styled.div`
  background-color: #f7f7f7;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 20px;
  margin-bottom: 10px;
`;

const CardTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const CardContent = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
`;

const CardLink = styled(Link)`
  text-decoration: none;
  color: blue;
`;

const TermCard = ({ term }) => {
  const { id, title, definition } = term;

  return (
    <CardContainer>
      <CardTitle>{title}</CardTitle>
      <CardContent>{definition}</CardContent>
      <CardLink to={`/terms/${id}`}>Learn More</CardLink>
    </CardContainer>
  );
};

TermCard.propTypes = {
  term: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    definition: PropTypes.string.isRequired,
  }).isRequired,
};

export default TermCard;
