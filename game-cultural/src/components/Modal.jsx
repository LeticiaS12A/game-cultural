import React from 'react';

function Modal({ conteudo, fechar }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center p-4">
      <div className="bg-[var(--card-bg)] border border-[var(--primary)] text-white rounded-xl p-6 max-w-sm w-full shadow-xl backdrop-blur-md">
        <h3 className="text-xl font-bold mb-4">{conteudo.titulo}</h3>
        <p>{conteudo.sinopse || conteudo.historia}</p>
        <button
          onClick={fechar}
          className="mt-6 w-full py-3 bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-black rounded-lg transition"
        >
          Fechar
        </button>
      </div>
    </div>
  );
}

export default Modal;
