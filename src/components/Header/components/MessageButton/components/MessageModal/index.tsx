import { CloverOn } from "@/assets/icons/clover-on";

interface MessageModalProps {
  message: string;
  onClose: () => void;
}

export const MessageModal = ({ message, onClose }: MessageModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="flex w-3/4 max-w-sm flex-col items-center gap-5 rounded-2xl border bg-white/90 p-8 text-center dark:border-zinc-700 dark:bg-zinc-900 dark:text-white">
        <button
          onClick={onClose}
          className="self-end rounded-2xl px-4 py-2 text-zinc-800 transition dark:text-zinc-50"
        >
          X
        </button>
        <span className="y-auto w-1/4">
          <CloverOn className="text-zinc-800 dark:text-violet-400" />
        </span>
        <p className="mb-6 text-zinc-700 italic sm:text-2xl md:text-2xl dark:text-zinc-200">
          {message}
        </p>
      </div>
    </div>
  );
};
