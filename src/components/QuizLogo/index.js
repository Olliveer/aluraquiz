/* eslint-disable linebreak-style */
import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

function Logo({ className }) {
  return (
    <a href="/"><img className={className} viewBox="0 0 135 67" fill="none" src="https://i.imgur.com/5Ph9wXP.png" alt="imgLogo" /></a>
  );
}

Logo.propTypes = {
  className: PropTypes.string.isRequired,
};

const QuizLogo = styled(Logo)`
  margin: auto;
  max-width: 250px;
  display: block;
  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;

export default QuizLogo;
