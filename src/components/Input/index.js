/* eslint-disable linebreak-style */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputBase = styled.input`
    width: 100%;
    padding: 15px;
    font-size:14px;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.contrastText};
    background-color: ${({ theme }) => theme.colors.mainBg};
    border-radius: ${({ theme }) => theme.colors.borderRadius};
    outline: 0;
    margin-bottom: 25px;
`;

export default function Input({ onChange, placeholder, ...props }) {
  return (
    <div>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <InputBase placeholder={placeholder} onChange={onChange} {...props} />
    </div>
  );
}

Input.defaultProps = {
  value: '',
};

Input.prototypes = {
  onChange: PropTypes.func.isRequired,
  p: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
