import Head from 'next/head';

function IndexPage() {
  return (
    <div>
      <Head>
        <title>AluraQuiz - 2° Guerra Mundial</title>
        <meta name="title" content="AluraQuiz - 2° Guerra Mundial" />
        <meta name="description" content="" />
        {/* Open Graph / Facebook  */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="AluraQuiz - 2° Guerra Mundial" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="AluraQuiz - 2° Guerra Mundial" />
        <meta property="twitter:description" content="" />
        <meta property="twitter:image" content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png" />
      </Head>
    </div>
  );
}

export default IndexPage;
