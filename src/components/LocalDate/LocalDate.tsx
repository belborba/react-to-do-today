export const LocalDate = () => {
  const today = new Date();

  const date = today.toLocaleDateString("en", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <p className="bg-zinc-300 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-50 p-2 px-4 rounded-full">
      {date}
    </p>
  );
};
