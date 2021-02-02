/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import Lottie from 'react-lottie';
import db from '../../db.json';
import Widget from '../../src/components/Widget';
import QuizLogo from '../../src/components/QuizLogo';
import QuizBackground from '../../src/components/QuizBackground';
import QuizContainer from '../../src/components/QuizContainer';
import Button from '../../src/components/Button';
import Loading from '../../src/components/Loading';
import AlternativesForm from '../../src/components/AlternativeForm';
import BackLinkArrow from '../../src/components/BackLinkArrow';
import Footer from '../../src/components/Footer';

function ResultWidget({ results }) {
  const router = useRouter();
  const [name, setName] = useState(router.query.name);
  const [totalPoints, setTotalPoints] = useState(null);
  const points = results.filter((x) => x).length * 10;

  const handleSubmit = ((e) => {
    e.preventDefault();
    const data = { name, points };
    try {
      const response = axios.post(
        `${process.env.NEXT_PUBLIC_URL}/api/leaderboards`,
        data,
      );
      router.push('/');
    } catch (err) {
      console.log(err.response.data.error);
    }
  });

  return (
    <Widget>
      <Widget.Header>
        Confira seus resultados
        <h4 style={{ margin: '3px', textTransform: 'uppercase' }}>
          {`${router.query.name}`}
        </h4>
      </Widget.Header>
      <Widget.Content>
        <p>
          Você acertou
          {' '}
          {/* {results.reduce((somaAtual, resultAtual) => {
            const isAcerto = resultAtual === true;
            return isAcerto ? somaAtual + 1 : somaAtual;
          }, 0)} */}
          {results.filter((x) => x).length}
          {' '}
          perguntas sua pontuação é:
          {' '}
          {results.filter((x) => x).length * 10}
        </p>
        <ul>
          {results.map((result, index) => (
            <li key={`result__${result}`}>
              #
              {index + 1}
              {' '}
              Resultado:
              {result === true ? ' Acertou' : ' Errou!'}
              {' '}
            </li>
          ))}
        </ul>
        <form onSubmit={handleSubmit}>
          <input type="hidden" value={name} onChange={(e) => { setName(router.query.name); }} />
          <input type="hidden" value={points} onChange={(e) => { setTotalPoints(points); }} />
          <Button
            as={motion.button}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="submit"
          >
            Será que estou no top 10?
          </Button>
        </form>
      </Widget.Content>
    </Widget>
  );
}

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        Pã Pã rããããã...
      </Widget.Header>
      <Widget.Loading>
        <Loading />
      </Widget.Loading>
    </Widget>
  );
}

function QuestionWidget({
  question, questionIndex, totalQuestions, onSubmit, addResult,
}) {
  const [selectedAlternative, setSelectedAlternative] = useState(undefined);
  const [isQuestionSubmited, setIsQuestionSubmited] = useState(false);
  const questionId = `question__${questionIndex}`;
  const isCorrect = selectedAlternative === question.answer;
  const hasAlternativeSelected = selectedAlternative !== undefined;

  return (
    <Widget>
      <Widget.Header>
        <BackLinkArrow href="/" />
        <h3>
          {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
        </h3>
      </Widget.Header>

      <img
        alt="Descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
        src={question.image}
      />
      <Widget.Content>
        <h2>
          {question.title}
        </h2>
        <p>
          {question.description}
        </p>
        <AlternativesForm onSubmit={(e) => {
          e.preventDefault();
          setIsQuestionSubmited(true);
          setTimeout(() => {
            addResult(isCorrect);
            onSubmit();
            setIsQuestionSubmited(false);
            setSelectedAlternative(undefined);
          }, 1 * 1000);
        }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
            const isSelected = selectedAlternative === alternativeIndex;
            return (
              <Widget.Topic
                as="label"
                key={alternativeId}
                htmlFor={alternativeId}
                data-selected={isSelected}
                data-status={isQuestionSubmited && alternativeStatus}
              >
                <input
                  style={{ display: 'none' }}
                  id={alternativeId}
                  name={questionId}
                  onChange={() => setSelectedAlternative(alternativeIndex)}
                  type="radio"
                />
                {alternative}
              </Widget.Topic>
            );
          })}
          {!isQuestionSubmited && (
          <Button
            as={motion.button}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="submit"
            disabled={!hasAlternativeSelected}
          >
            Confirmar
          </Button>
          )}
          {isQuestionSubmited && isCorrect && <p> Você acertou!</p>}
          {isQuestionSubmited && !isCorrect && <p> Você errou!</p>}
        </AlternativesForm>
      </Widget.Content>
    </Widget>

  );
}

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

export default function QuizPage() {
  const [screenState, setScreenState] = useState(screenStates.LOADING);
  const [results, setResults] = useState([]);
  const totalQuestions = db.questions.length;
  const [questionIndex, setQuestionIndex] = useState(0);
  const question = db.questions[questionIndex];

  function addResult(result) {
    setResults([
      ...results,
      result,
    ]);
  }

  useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 2500);
  }, []);

  function handleSubmitQuiz() {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setQuestionIndex(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            onSubmit={handleSubmitQuiz}
            addResult={addResult}
          />
        )}

        {screenState === screenStates.LOADING && <LoadingWidget />}

        {screenState === screenStates.RESULT && <ResultWidget results={results} />}
        <Footer
          as={motion.footer}
          className="container"
          whileHover={{ scale: 1.2, rotate: 360 }}
          whileTap={{ scale: 0.8, rotate: -90, borderRadius: '100%' }}
        />
      </QuizContainer>
    </QuizBackground>
  );
}
