/* eslint-disable react/react-in-jsx-scope */
import Head from 'next/head';

function IndexPage() {
  return (
    <div>
      <Head>
        {/* Primary Meta Tags  */}
        <title>OverQuiz</title>
        <meta name="title" content="OverQuiz" />
        <meta name="description" content="Um quiz sobre o jogo Overwatch" />

        {/* Open Graph / Facebook  */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="OverQuiz" />
        <meta property="og:description" content="Um quiz sobre o jogo Overwatch" />
        <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />

        {/* Twitter  */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="OverQuiz" />
        <meta property="twitter:description" content="Um quiz sobre o jogo Overwatch" />
        <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />
      </Head>
    </div>
  );
}

export default IndexPage;
