import Clover from "../../assets/icons/clover-on.svg?react";

interface MessageModalProps {
  message: string;
  onClose: () => void;
}

export const MessageModal = ({ message, onClose }: MessageModalProps) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className=" flex flex-col items-center gap-5 w-2xl bg-white dark:bg-zinc-900 dark:text-white p-8 border-2 dark:border-zinc-700 rounded-2xl shadow-xl max-w-sm text-center">
        <button
          onClick={onClose}
          className="self-end text-zinc-800 dark:text-zinc-50 px-4 py-2  cursor-pointer rounded-2xl transition"
        >
          X
        </button>
        <span className="w-[80px] y-auto">
          <Clover />
        </span>
        <p className=" text-2xl italic text-zinc-700 dark:text-zinc-200 mb-6">
          {message}
        </p>
      </div>
    </div>
  );
};

/*
#RESPONSABILIDADE DO COMPONENTE#
1. Receber a mensagem random do componente pai.
2. Receber a função que altera o estado de renderização da modal.
*/
