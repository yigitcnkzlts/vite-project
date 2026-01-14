import { useMemo, useState } from "react";

export default function CommentBox({ onSubmit }) {
  const [text, setText] = useState("");

  const remaining = useMemo(() => 160 - text.length, [text]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;

    onSubmit?.(trimmed);
    setText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-4 bg-white/80 backdrop-blur rounded-2xl border border-black/10 p-4"
    >
      <div className="flex items-start gap-3">
        <div className="flex-1">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            maxLength={160}
            placeholder="Yanıtını yaz..."
            rows={3}
            className="
              w-full rounded-xl border border-black/10 bg-white/90 px-4 py-3 text-sm
              resize-none
              outline-none focus:outline-none
              focus:ring-0
            "
          />

          <div className="mt-2 flex items-center justify-between">
            <span className="text-xs text-black/45">{remaining} karakter</span>

            <button
              type="submit"
              disabled={!text.trim()}
              className="
                rounded-xl bg-green-700 hover:bg-green-800 text-white font-semibold
                px-6 py-2 shadow
                disabled:opacity-40 disabled:hover:bg-green-700
                outline-none focus:outline-none focus:ring-0
              "
            >
              Yanıtla
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}