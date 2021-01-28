/* eslint-disable linebreak-style */
import styled from 'styled-components';

import React from 'react';
import PropTypes from 'prop-types';

function Loading({ className }) {
  return (
    <img className={className} src="https://media.giphy.com/media/LrXOwwiYvN4R7S0pZo/giphy.gif" alt="LoadingIMG" />
  );
}

Loading.propTypes = {
  className: PropTypes.string.isRequired,
};

const QuizLoading = styled(Loading)`
  margin-left: auto;
  max-width: 100%;
  display: block;
  @media screen and (max-width: 500px) {
    margin: 0;
  }
`;

export default QuizLoading;
