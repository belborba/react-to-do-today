import { useState, useEffect } from "react";
import { messagesData } from "../../data/Message";
import { MessageModal } from "../MessageModal/MessageModal";
import Clover from "../../assets/icons/clover-on.svg?react";

export const MessageButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); //Estado para verificar se a Modal está ativa ou não.
  const [message, setMessage] = useState(""); // O localStorage ou precisa renderizar uma nova mensagem e armazenar no localStorage
  const [verifyDay, setVerifyDay] = useState(false); // Verifica se a mensagem já foi visualizada.

  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    const savedDate = localStorage.getItem("messageDate");
    const savedMessage = localStorage.getItem("savedMessage");

    if (savedDate === today && savedMessage) {
      setMessage(savedMessage);
      setVerifyDay(true);
    } else {
      setVerifyDay(false);
      setMessage("");
      localStorage.removeItem("savedMessage");
    }
  }, [today]); // Adiciona today como dependência (toda vez que a data alterar será executado)

  const openModal = () => {
    if (message) {
      setIsModalOpen(true);
      return;
    }

    const randomMessage =
      messagesData[Math.floor(Math.random() * messagesData.length)];
    localStorage.setItem("messageDate", today);
    localStorage.setItem("savedMessage", randomMessage.message);
    setIsModalOpen(true);
    setVerifyDay(true);
    setMessage(randomMessage.message);
  };

  return (
    <>
      <button
        onClick={openModal}
        className={`relative w-8 h-8 flex items-center justify-center p-1.5 ${
          verifyDay
            ? "dark:bg-zinc-500 bg-zinc-500"
            : "bg-zinc-800 dark:bg-violet-400"
        } rounded-full cursor-pointer`}
      >
        {verifyDay ? (
          <Clover className="text-zinc-300 dark:text-zinc-300" />
        ) : (
          <Clover className="text-zinc-300 dark:text-zinc-800" />
        )}
      </button>
      {isModalOpen && (
        <MessageModal message={message} onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
};

// Adicionar State que controla a visulação da mensagem.
// Adicionar State que controlar a renderização da imagem.
// Verificar se foi vista hoje e armazenar essa verificação no localStorage
// Modal renderizada condicionalmente dentro da tela
