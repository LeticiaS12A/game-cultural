import React, { useState } from 'react';
import Modal from '../components/Modal';

const lendas = [
  { 
    titulo: "Saci-Pererê", 
    imagem: "saci.webp", 
    historia: "O Saci é uma das figuras mais famosas do folclore brasileiro. Ele é um menino negro de uma perna só, que usa um gorro vermelho mágico que lhe dá poderes, como desaparecer ou se transformar. É conhecido por ser travesso, adora fazer pegadinhas, como esconder objetos, assustar viajantes ou assustar animais. Dizem que ele vive nas florestas, pulando de um lado para o outro em redemoinhos. É uma lenda que nasceu da mistura de culturas africanas, indígenas e europeias, e até hoje é contada por todo o país, principalmente nas áreas rurais." 
  },
  { 
    titulo: "Iara", 
    imagem: "iara.webp", 
    historia: "A Iara é uma sereia do folclore brasileiro, descrita como uma belíssima mulher com longos cabelos negros e corpo de peixe da cintura para baixo. Ela vive nos rios amazônicos e encanta pescadores com seu canto hipnótico, atraindo-os para o fundo das águas, de onde nunca mais voltam. Reza a lenda que a Iara foi uma guerreira indígena que, após ser invejada pelos irmãos, foi atirada no rio, mas acabou transformando-se nessa criatura encantada. A lenda alerta sobre os perigos escondidos nas águas e sobre o poder do feminino." 
  },
  { 
    titulo: "Curupira", 
    imagem: "curupira.jpg", 
    historia: "O Curupira é o guardião das florestas, uma figura indígena que protege as árvores e os animais contra caçadores e madeireiros. Ele é descrito como um menino de cabelos vermelhos e com os pés virados para trás, para confundir quem tenta segui-lo. Quando alguém tenta destruir a natureza, o Curupira cria armadilhas e prega peças para proteger seu território. Essa lenda é muito conhecida na Amazônia e representa a importância do respeito e da preservação do meio ambiente." 
  },
  { 
    titulo: "Boitatá", 
    imagem: "boitata.jpg", 
    historia: "O Boitatá é uma serpente de fogo que protege as florestas e os animais, especialmente à noite. Segundo a lenda, ele se alimenta de olhos de criaturas que fazem o mal e que queimam a natureza. A palavra 'Boitatá' vem do tupi-guarani e significa 'cobra de fogo'. É comum associá-la a fenômenos naturais, como os focos de fogo vistos em pântanos e matas. A lenda do Boitatá é uma das mais antigas do Brasil e reforça a ideia de proteção da natureza." 
  },
  { 
    titulo: "Cuca", 
    imagem: "cuca.jpg", 
    historia: "A Cuca é uma bruxa assustadora do folclore brasileiro, famosa por roubar e assustar crianças desobedientes. Ela é geralmente representada como uma velha com aparência de jacaré, com garras afiadas e poderes mágicos. A figura da Cuca se popularizou principalmente por meio do Sítio do Picapau Amarelo, de Monteiro Lobato, mas a lenda é muito mais antiga, trazida por colonizadores portugueses. A Cuca serve como um aviso para as crianças se comportarem bem, sob a ameaça de serem levadas por ela durante a noite." 
  },
  { 
    titulo: "Mula Sem Cabeça", 
    imagem: "mula.jpg", 
    historia: "A Mula Sem Cabeça é uma lenda assustadora sobre uma mulher que, por ter se envolvido com um padre, foi amaldiçoada e transformada em uma mula que corre sem parar, soltando fogo pelas narinas e pelo pescoço onde deveria estar a cabeça. A criatura vaga pelas matas e estradas durante as noites, assustando quem cruza seu caminho. A lenda é uma crítica social às transgressões das normas religiosas e morais, muito popular em várias regiões do Brasil, principalmente no interior." 
  }
];

function Lendas() {
  const [modalInfo, setModalInfo] = useState(null);

  return (
    <div className="min-h-screen p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {lendas.map((lenda, idx) => (
        <div
          key={idx}
          onClick={() => setModalInfo(lenda)}
          className="cursor-pointer shadow-md rounded-lg overflow-hidden bg-[var(--card-bg)] border border-[var(--primary)] mx-auto w-full max-w-[400px] transform transition hover:scale-105 backdrop-blur-md"
        >
          <img
            src={`/assets/lendas/${lenda.imagem}`}
            alt={lenda.titulo}
            className="w-full h-80 object-cover"
          />
          <div className="p-2 text-center text-sm font-semibold text-white">{lenda.titulo}</div>
        </div>
      ))}
      {modalInfo && <Modal conteudo={modalInfo} fechar={() => setModalInfo(null)} />}
    </div>
  );
}
export default Lendas;
