/* eslint-disable react/react-in-jsx-scope */
import Head from 'next/head';

function IndexPage() {
  return (
    <div>
      <Head>
        {/* Primary Meta Tags  */}
        <meta name="title" content="OverQuiz" />
        <meta name="description" content="Um quiz sobre o jogo Overwatch" />

        {/* Open Graph / Facebook  */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="OverQuiz" />
        <meta property="og:description" content="Um quiz sobre o jogo Overwatch" />
        <meta property="og:image" content="https://images3.alphacoders.com/702/thumb-1920-702620.png" />

        {/* Twitter  */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="OverQuiz" />
        <meta property="twitter:description" content="Um quiz sobre o jogo Overwatch" />
        <meta property="twitter:image" content="https://images3.alphacoders.com/702/thumb-1920-702620.png" />
      </Head>
    </div>
  );
}

export default IndexPage;
