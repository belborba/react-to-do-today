type SquareButtonProps = {
  label: string;
  onClick: () => void;
};

export const SquareButton = ({ label, onClick }: SquareButtonProps) => {
  return (
    <button
      className="w-[32px] h-[32px] absolute right-4 top-1/2 -translate-y-1/2 bg-zinc-800 dark:bg-lime-300 hover:cursor-pointer p-2 rounded-md flex justify-center items-center dark:text-zinc-800"
      onClick={onClick}
    >
      {label}
    </button>
  );
};
