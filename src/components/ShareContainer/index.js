/* eslint-disable linebreak-style */
import React from 'react';
import styled from 'styled-components';
import {
  FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, RedditShareButton, RedditIcon,
} from 'next-share';

const Share = styled.footer`
  background-color: #ffffff10;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px; 
`;

export default function ShareContainer() {
  return (
    <Share>
      <FacebookShareButton
        url="https://aluraquiz.olliveer.vercel.app/"
        quote="Um quiz desenvolvido na imersão React/Next.js da Alura."
        hashtag="#AluraQuiz"
      >
        <div style={{ marginRight: 10, width: 32, height: 32 }}>
          <FacebookIcon size={32} round />
        </div>
      </FacebookShareButton>

      <RedditShareButton
        url="https://aluraquiz.olliveer.vercel.app/"
        title="Um quiz desenvolvido na imersão React/Next.js da Alura."
        windowWidth={660}
        windowHeight={460}
      >
        <div style={{ marginRight: 10, width: 32, height: 32 }}>
          <RedditIcon size={32} round />
        </div>
      </RedditShareButton>

      <TwitterShareButton
        url="https://aluraquiz.olliveer.vercel.app/"
        title="Um quiz desenvolvido na imersão React/Next.js da Alura."
      >
        <div style={{ marginRight: 10, width: 32, height: 32 }}>
          <TwitterIcon size={32} round />
        </div>
      </TwitterShareButton>

    </Share>
  );
}
