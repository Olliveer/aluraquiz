/* eslint-disable linebreak-style */
import styled from 'styled-components';

const LeaderboardContainer = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  width: 30%;
  display: flex;
  position: absolute;
  top:15%;
  left: 40%;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: #FFFFFF70;
  border-radius: 14px;
  overflow: hidden;
  @media screen and (max-width:1500px){
    z-index:1;
    display: none;
  }
  

  h1 h2 h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
    color: ${({ theme }) => theme.colors.primary}
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`;

LeaderboardContainer.Header = styled.header`
    width: 500px;
  padding: 18px 32px;
  background-size: 100px;
  background-color: #2196f370;
  * {
    margin: 0;
  }
`;

LeaderboardContainer.Content = styled.div`
  & > *:first-child{
    margin-top: 0;
  }
  & > *::last-child{
    margin-bottom: 0;
  }
  ul{
    list-style: none;
    padding: 0;
  }
`;

LeaderboardContainer.Topic = styled.a`
outline: 0;
text-decoration: none;
color: ${({ theme }) => theme.colors.contrastText};
background-color: ${({ theme }) => `${theme.colors.primary}40`};
padding: 10px 15px;
margin-bottom: 8px;
margin-left: 10%;
margin-right: 15%;
cursor: pointer;
border-radius: ${({ theme }) => theme.borderRadius};
transition: .3s;
display: block;
align-items: center;
justify-content: center;

&:hover,
&:focus {
  opacity: .9;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: #000;
}
`;

export default LeaderboardContainer;
