/* eslint-disable react/react-in-jsx-scope */
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #2196f380;
  padding: 20px;
  display: flex;
  position: fixed;
  top: 248px;
  width: 100px;
  z-index: 100;
  left: 0pt;
  align-items: center;
  border-radius: 4px;
  @media screen and (max-width: 500px) {
    display: none;
  } 
  img {
    width: 58px;
    margin-right: 23px;
  }
  a {
    color: #000;
    text-decoration: none;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
    span {
      text-decoration: underline;
    }
  }
  P {
    color: #000;
  }
`;

export default function Footer(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FooterWrapper {...props}>
      {/* eslint-disable-next-line react/jsx-no-target-blank */}
      <a href="https://www.alura.com.br/" target="_blank">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
    </FooterWrapper>
  );
}
