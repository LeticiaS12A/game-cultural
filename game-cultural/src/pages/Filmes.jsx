import React, { useState } from 'react';
import Modal from '../components/Modal';

const filmes = [
  { titulo: "Central do Brasil (1998)", imagem: "central.webp", sinopse: "Esse filme é mais sensível e emocionante. Conta a história da Dora, uma ex-professora que trabalha escrevendo cartas pras pessoas na Central do Brasil, no Rio. Um dia, ela conhece o Josué, um menino que acabou de perder a mãe e quer encontrar o pai, que ele nunca conheceu. A Dora, que no começo é meio fria, acaba se apegando ao menino e embarca com ele numa viagem pelo sertão nordestino em busca desse pai. É uma história linda sobre afeto, redenção e também sobre as desigualdades do Brasil. A atuação da Fernanda Montenegro é simplesmente impecável — tanto que o filme foi indicado ao Oscar!" },
  { titulo: "O Auto da Compadecida (2000)", imagem: "auto.jpg", sinopse: "Esse é um clássico do cinema brasileiro que mistura comédia, drama e até um toque de aventura. A história acompanha João Grilo e Chicó, dois nordestinos bem humildes e super espertos que vivem se metendo em confusão pra tentar sobreviver no sertão da Paraíba. Eles enrolam todo mundo: padre, padeiro, coronel… mas sempre de um jeito muito carismático. O ponto alto é quando rola um julgamento no céu, com a participação de figuras como o Diabo e, claro, a Compadecida — que aparece pra defender os personagens. É um filme super divertido, cheio de críticas sociais, mas com aquele jeitão bem brasileiro de contar histórias. Impossível não rir e se emocionar." },
  { titulo: " Cidade de Deus (2002)", imagem: "cidade.jpg", sinopse: "Um filme intenso, impactante, que já começa te jogando no meio de uma favela carioca dos anos 60 até os anos 80. A história é contada pelo Buscapé, um garoto que sonha ser fotógrafo e tenta fugir da violência que domina a Cidade de Deus. Ao longo do filme, a gente vê como vários personagens crescem nesse ambiente, especialmente o Zé Pequeno, que vira um dos traficantes mais temidos. É um filme cheio de ação, tensão e, principalmente, muita realidade. Não é daqueles que romantizam a violência; pelo contrário, mostra de forma crua como o crime afeta a vida de quem mora lá. É considerado um dos maiores filmes brasileiros e é reconhecido no mundo todo." },
  { titulo: "Tropa de Elite (2007)", imagem: "tropa.jpg", sinopse: "Esse aqui é outro clássico, super polêmico, que mostra o lado de quem tá dentro da polícia. A história é narrada pelo Capitão Nascimento, do BOPE — a tropa de elite do Rio de Janeiro — que vive na linha de frente do combate ao tráfico de drogas nas favelas. O filme mostra de forma bem direta e crua a violência, a corrupção e o peso psicológico que esse trabalho traz. Além disso, apresenta a jornada do Nascimento tentando encontrar um substituto pra ele, já que quer sair da corporação pra cuidar da família. É cheio de cenas fortes, ação e também te faz refletir sobre segurança pública e desigualdade social no Brasil." },
  { titulo: "Que Horas Ela Volta? (2015)", imagem: "quehoras.jpg", sinopse: "Esse é um filme super importante, que fala sobre classe social e relações familiares de um jeito muito próximo da nossa realidade. A história gira em torno da Val, uma empregada doméstica que mora na casa dos patrões, em São Paulo, e cria praticamente o filho deles. Tudo muda quando a filha da Val, a Jéssica, chega do Nordeste pra prestar vestibular e começa a questionar as regras não ditas dessa relação entre patrões e empregados. O filme mostra de forma sutil, mas poderosa, como as diferenças de classe afetam as relações pessoais. É emocionante e faz a gente pensar muito sobre privilégios e limites." },
  { titulo: "Bacurau (2019)", imagem: "bacurau.jpg", sinopse: "Esse filme é simplesmente uma loucura — mas no melhor sentido! É uma mistura de faroeste, ficção científica e crítica social. A história se passa numa comunidade fictícia chamada Bacurau, no sertão nordestino, que de repente começa a perceber que está sendo apagada do mapa e que coisas muito estranhas estão acontecendo. Depois, eles descobrem que estão sendo caçados por um grupo de gringos, e aí o filme vira uma resistência total: a galera de Bacurau se une pra defender o lugar. É um filme cheio de simbolismos, super atual, que fala sobre colonialismo, desigualdade e resistência, tudo isso com um estilo cinematográfico muito original. Dá um baita orgulho de ver." }
];

function Filmes() {
  const [modalInfo, setModalInfo] = useState(null);

  return (
    <div className="min-h-screen p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {filmes.map((filme, idx) => (
        <div
          key={idx}
          onClick={() => setModalInfo(filme)}
          className="cursor-pointer shadow-md rounded-lg overflow-hidden bg-[var(--card-bg)] border border-[var(--primary)] mx-auto w-full max-w-[400px] transform transition hover:scale-105 backdrop-blur-md"
        >
          <img
            src={`/assets/filmes/${filme.imagem}`}
            alt={filme.titulo}
            className="w-full h-80 object-cover"
          />
          <div className="p-2 text-center text-sm font-semibold text-white">{filme.titulo}</div>
        </div>
      ))}
      {modalInfo && <Modal conteudo={modalInfo} fechar={() => setModalInfo(null)} />}
    </div>
  );
}

export default Filmes;
