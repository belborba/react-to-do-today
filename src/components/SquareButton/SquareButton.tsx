type SquareButtonProps = {
  label: string;
  onClick: () => void;
};

export const SquareButton = ({ label, onClick }: SquareButtonProps) => {
  return (
    <button
      className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] md:w-[40px] md:h-[40px] sm:text-2xl font-semiboldmd:text-2xl absolute right-4 top-1/2 -translate-y-1/2 bg-zinc-800 dark:bg-violet-400 p-2 rounded-md flex justify-center items-center dark:text-zinc-800"
      onClick={onClick}
    >
      {label}
    </button>
  );
};
