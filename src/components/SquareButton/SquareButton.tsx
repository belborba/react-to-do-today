type SquareButtonProps = {
  label: string;
  onClick: () => void;
};

export const SquareButton = ({ label, onClick }: SquareButtonProps) => {
  return (
    <button
      className="w-[32px] h-[32px] absolute right-4 top-1/2 -translate-y-1/2 bg-lime-300 hover:cursor-pointer p-2 rounded-md flex justify-center items-center text-zinc-800"
      onClick={onClick}
    >
      {label}
    </button>
  );
};
