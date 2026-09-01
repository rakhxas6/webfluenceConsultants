import React, { useEffect, useRef, useState } from "react";
import { cn } from "../../lib/cn";
import { useReducedMotion } from "../../lib/useMotionSafe";

const TYPE_MS = 78;
const DELETE_MS = 38;
const HOLD_MS = 2000;

/**
 * Typewriter word swap.
 *
 * The live region is polite and only announces the settled word, so assistive
 * tech hears "growth engine", not every intermediate keystroke. Under reduced
 * motion the words still rotate — on a timer, without the per-character churn.
 */
export default function WordCycler({ words, className }) {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(reduced ? words[0] : "");
  const [deleting, setDeleting] = useState(false);
  const word = words[index];
  const settled = useRef(true);

  useEffect(() => {
    if (!reduced) return;
    setText(words[index]);
    const id = setTimeout(() => setIndex((i) => (i + 1) % words.length), 3600);
    return () => clearTimeout(id);
  }, [reduced, index, words]);

  useEffect(() => {
    if (reduced) return;
    let id;
    if (!deleting && text.length < word.length) {
      settled.current = false;
      id = setTimeout(() => setText(word.slice(0, text.length + 1)), TYPE_MS);
    } else if (!deleting && text.length === word.length) {
      settled.current = true;
      id = setTimeout(() => setDeleting(true), HOLD_MS);
    } else if (deleting && text.length > 0) {
      id = setTimeout(() => setText(word.slice(0, text.length - 1)), DELETE_MS);
    } else {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    }
    return () => clearTimeout(id);
  }, [text, deleting, word, words.length, reduced]);

  return (
    // Plain inline flow, not inline-flex: the caret has to travel with the last
    // character when a long word wraps, not park at the block's right edge.
    <span className={cn(className)}>
      <span aria-hidden="true">{text}</span>
      <span className="sr-only" aria-live="polite">
        {settled.current ? word : ""}
      </span>
      <span
        aria-hidden="true"
        className="ml-[0.06em] inline-block h-[0.72em] w-[0.075em] animate-caret bg-flame align-[-0.02em] motion-reduce:animate-none"
      />
    </span>
  );
}
