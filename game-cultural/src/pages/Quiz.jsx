import React, { useState } from 'react';

const quizzes = {
  filmes: [
    { pergunta: "Qual filme mostra a favela carioca?", opcoes: ["Bacurau", "Cidade de Deus", "Central do Brasil"], correta: "Cidade de Deus" },
    { pergunta: "Qual filme é sobre desigualdade?", opcoes: ["Tropa de Elite", "Que Horas Ela Volta?", "Bacurau"], correta: "Que Horas Ela Volta?" },
    { pergunta: "Filme nordestino e religioso?", opcoes: ["O Auto da Compadecida", "Central do Brasil", "Cidade de Deus"], correta: "O Auto da Compadecida" },
    { pergunta: "Filme de resistência?", opcoes: ["Bacurau", "Tropa de Elite", "Central do Brasil"], correta: "Bacurau" },
    { pergunta: "Filme com crítica à polícia?", opcoes: ["Tropa de Elite", "Que Horas Ela Volta?", "Central do Brasil"], correta: "Tropa de Elite" },
    { pergunta: "Filme com jornada pelo Brasil?", opcoes: ["Central do Brasil", "Cidade de Deus", "Bacurau"], correta: "Central do Brasil" }
  ],
  lendas: [
    { pergunta: "Quem protege as florestas?", opcoes: ["Curupira", "Saci", "Boitatá"], correta: "Curupira" },
    { pergunta: "Quem tem os pés ao contrário?", opcoes: ["Curupira", "Iara", "Cuca"], correta: "Curupira" },
    { pergunta: "Quem encanta pescadores?", opcoes: ["Iara", "Cuca", "Saci"], correta: "Iara" },
    { pergunta: "Quem é uma bruxa temida?", opcoes: ["Cuca", "Iara", "Mula Sem Cabeça"], correta: "Cuca" },
    { pergunta: "Quem é uma cobra de fogo?", opcoes: ["Boitatá", "Curupira", "Saci"], correta: "Boitatá" },
    { pergunta: "Quem é travesso?", opcoes: ["Saci", "Curupira", "Boitatá"], correta: "Saci" }
  ]
};

function Quiz() {
  const [tema, setTema] = useState("");
  const [quiz, setQuiz] = useState([]);
  const [respostas, setRespostas] = useState([]);
  const [resultado, setResultado] = useState(null);

  const iniciarQuiz = (tipo) => {
    let perguntas = [];
    if (tipo === "misturado") {
      perguntas = [...quizzes.filmes, ...quizzes.lendas].slice(0, 10);
    } else {
      perguntas = quizzes[tipo].slice(0, 6);
    }
    setTema(tipo);
    setQuiz(perguntas);
    setRespostas([]);
    setResultado(null);
  };

  const responder = (opcao, idx) => {
    const novas = [...respostas];
    novas[idx] = opcao;
    setRespostas(novas);
  };

  const finalizar = () => {
    let corretas = 0;
    quiz.forEach((q, i) => {
      if (q.correta === respostas[i]) corretas++;
    });
    setResultado(`Você acertou ${corretas} de ${quiz.length}`);
  };

  return (
    <div className="min-h-screen p-6">
      {!tema ? (
        <div className="flex flex-col items-center space-y-4">
          <h2 className="text-3xl font-bold mb-4 text-white">Escolha o tema:</h2>
          {["filmes", "lendas", "misturado"].map((tipo) => (
            <button key={tipo}
              onClick={() => iniciarQuiz(tipo)}
              className="w-48 p-3 rounded-lg bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-black font-bold transition"
            >
              {tipo.charAt(0).toUpperCase() + tipo.slice(1)}
            </button>
          ))}
        </div>
      ) : resultado ? (
        <div className="text-center text-white">
          <h2 className="text-2xl font-bold mb-4">{resultado}</h2>
          <button onClick={() => setTema("")}
            className="mt-4 p-3 w-full rounded-lg bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-black font-bold transition">
            Refazer
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {quiz.map((q, idx) => (
            <div key={idx} className="bg-[var(--card-bg)] border border-[var(--primary)] p-4 rounded-lg shadow-lg backdrop-blur-md">
              <p className="font-semibold mb-2 text-white">{q.pergunta}</p>
              {q.opcoes.map((op, i) => (
                <label key={i} className="block mb-1 text-white">
                  <input
                    type="radio"
                    name={`q${idx}`}
                    value={op}
                    onChange={() => responder(op, idx)}
                    checked={respostas[idx] === op}
                    className="mr-2"
                  />
                  {op}
                </label>
              ))}
            </div>
          ))}
          <button onClick={finalizar}
            className="w-full p-3 rounded-lg bg-green-700 hover:bg-green-900 text-white font-bold transition">
            Finalizar
          </button>
        </div>
      )}
    </div>
  );
}

export default Quiz;
