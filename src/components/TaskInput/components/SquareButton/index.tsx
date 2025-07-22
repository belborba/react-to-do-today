type SquareButtonProps = {
  label: string;
  onClick: () => void;
};

export const SquareButton = ({ label, onClick }: SquareButtonProps) => {
  return (
    <button
      className="font-semiboldmd:text-2xl absolute top-1/2 right-4 flex h-[30px] w-[30px] -translate-y-1/2 cursor-pointer items-center justify-center rounded-md bg-zinc-800 p-2 sm:h-[40px] sm:w-[40px] sm:text-2xl md:h-[40px] md:w-[40px] dark:bg-violet-400 dark:text-zinc-800"
      onClick={onClick}
    >
      {label}
    </button>
  );
};
