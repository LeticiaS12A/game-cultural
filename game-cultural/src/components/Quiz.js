import React, { useState } from "react";

const questions = [
  {
    question: "Qual filme mostra a realidade das favelas do Rio e foi indicado ao Oscar?",
    options: ["Central do Brasil", "Cidade de Deus", "Tropa de Elite", "Marte Um"],
    answer: "Cidade de Deus",
  },
  {
    question: "Quem é o personagem folclórico de uma perna só e que solta redemoinhos?",
    options: ["Curupira", "Boitatá", "Saci-Pererê", "Lobisomem"],
    answer: "Saci-Pererê",
  },
  {
    question: "Qual lenda fala de uma mulher que vira uma mula com fogo no pescoço?",
    options: ["Iara", "Cuca", "Mula Sem Cabeça", "Caipora"],
    answer: "Mula Sem Cabeça",
  },
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    const next = currentQuestion + 1;
    if (next < questions.length) {
      setCurrentQuestion(next);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="content-page">
      {showScore ? (
        <div>
          <h2>Você acertou {score} de {questions.length} perguntas!</h2>
        </div>
      ) : (
        <div>
          <h3>{questions[currentQuestion].question}</h3>
          {questions[currentQuestion].options.map((option, index) => (
            <button key={index} onClick={() => handleAnswer(option)}>
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Quiz;
