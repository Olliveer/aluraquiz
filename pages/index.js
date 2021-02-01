/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-multi-spaces */
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { connectToDatabase } from '../util/mongodb';
import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import QuizBackground from '../src/components/QuizBackground';
import GitHubCorner from '../src/components/GitHubCorner';
import Head from '../src/components/Head';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import QuizContainer from '../src/components/QuizContainer';
import QuizLogo from '../src/components/QuizLogo';
import Link from '../src/components/Link';
import LeaderboardContainer from '../src/components/LeaderboardContainer';
import ShareContainer from '../src/components/ShareContainer';

export default function Home({ properties }) {
  const router = useRouter();
  const [name, setName] = useState('');
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head />
      <QuizContainer>
        <QuizLogo />
        <Widget
          as={motion.section}
          transition={{ delay: 0, duration: 0.5 }}
          variants={{
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: '100%' },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Header>
            <h1>I need Healing Quiz</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={(e) => {
              e.preventDefault();
              router.push({
                pathname: '/quiz',
                query: { name },
              });
              // router.push(`/quiz?name=${name}`);
            }}
            >
              <Input
                name="nomeDoUsuario"
                placeholder="Seu nome aqui"
                // eslint-disable-next-line react/jsx-no-bind
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <Button
                as={motion.button}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                type="submit"
                disabled={name.length === 0}
              >
                {`Jogar ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget
          as={motion.section}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Content>
            <h1>Quizes da Galera</h1>
            <ul>
              {db.external.map((linkExterno) => {
                const [projectName, githubUser] = linkExterno
                  .replace(/\//g, '')
                  .replace('https:', '')
                  .replace('.vercel.app', '')
                  .split('.');

                return (
                  <li key={linkExterno}>
                    <Widget.Topic as={Link} href={`/quiz/${projectName}___${githubUser}`}>{`${projectName}/${githubUser}`}</Widget.Topic>
                  </li>
                );
              })}
            </ul>
          </Widget.Content>
          <ShareContainer />
        </Widget>

        <LeaderboardContainer
          as={motion.section}
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          initial="hidden"
          animate="show"
        >
          <LeaderboardContainer.Content>
            <LeaderboardContainer.Header>
              <h1>Top 10 jogadores</h1>
            </LeaderboardContainer.Header>
            <ul>
              {properties && properties.map((property, index) => (
                <li key={`${property.id}`}>
                  <LeaderboardContainer.Topic as={Link} href="/">
                    {index + 1}
                    {' '}
                    ° Lugar:
                    {' '}
                    {property.name}
                    {' '}
                    fez
                    {' '}
                    <strong>{property.points}</strong>
                    {' '}
                    pontos
                  </LeaderboardContainer.Topic>
                </li>
              ))}
            </ul>
          </LeaderboardContainer.Content>
        </LeaderboardContainer>
        <Footer
          as={motion.footer}
          className="container"
          whileHover={{ scale: 1.2, rotate: 360 }}
          whileTap={{ scale: 0.8, rotate: -90, borderRadius: '100%' }}
        />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/Olliveer/aluraquiz" />
    </QuizBackground>
  );
}

// eslint-disable-next-line no-unused-vars
export async function getServerSideProps(context) {
  const { db } = await connectToDatabase();

  const data = await db.collection('stats').find().sort({ points: -1 }).limit(10)
    .toArray();

  const properties = data.map((property) => ({
    id: String(property._id),
    name: property.name,
    points: property.points,
  }));
  return {
    props: { properties },
  };
}
