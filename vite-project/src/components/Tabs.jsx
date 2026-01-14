export default function Tabs({ active, setActive }) {
  const isTop = active === "top";

  return (
    <div className="w-fit">
      <div className="relative inline-grid grid-cols-2 rounded-2xl bg-white/10 p-1 ring-1 ring-white/15 backdrop-blur">
        {/* sliding indicator */}
        <span
          className={[
            "pointer-events-none absolute left-1 top-1 h-[calc(100%-0.5rem)] w-[calc(50%-0.25rem)] rounded-xl",
            "bg-white/90 shadow-sm transition-transform duration-300 ease-out",
            isTop ? "translate-x-full" : "translate-x-0",
          ].join(" ")}
        />

        <button
          onClick={() => setActive("normal")}
          className={[
            "relative z-10 rounded-xl px-4 py-2 text-sm font-semibold transition focus:outline-none",
            !isTop ? "text-green-900" : "text-white/90 hover:text-white",
          ].join(" ")}
        >
          Normal
        </button>

        <button
          onClick={() => setActive("top")}
          className={[
            "relative z-10 rounded-xl px-4 py-2 text-sm font-semibold transition focus:outline-none",
            isTop ? "text-green-900" : "text-white/90 hover:text-white",
          ].join(" ")}
        >
          En Beğenilenler{" "}
          <span className="ml-2 rounded-full bg-black/10 px-2 py-0.5 text-[10px] font-extrabold tracking-wide text-green-900/80">
            TOP
          </span>
        </button>
      </div>
    </div>
  );
}