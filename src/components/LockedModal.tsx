import { AnimatePresence, motion } from "framer-motion";

interface Props {
  open: boolean;
  onClose: () => void;
  onReturn: () => void;
}

export function LockedModal({ open, onClose, onReturn }: Props) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 22, stiffness: 240 }}
            onClick={(e) => e.stopPropagation()}
            className="glass rounded-3xl max-w-md w-full p-8 sm:p-10 text-center glow-rose"
          >
            <div className="text-5xl mb-4">🔒❤️</div>
            <h2 className="font-display text-3xl sm:text-4xl mb-3">My Lady ❤️</h2>
            <p className="font-script text-2xl text-rose mb-2">
              You must wait until the special day arrives.
            </p>
            <p className="text-muted-foreground text-sm mb-6 font-display italic">
              Every memory in its perfect moment.
            </p>
            <button
              onClick={onReturn}
              className="px-6 py-3 rounded-full bg-rose-grad font-display tracking-wider uppercase text-sm hover:scale-105 transition-transform shadow-[var(--shadow-elegant)]"
            >
              Return To Today
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
