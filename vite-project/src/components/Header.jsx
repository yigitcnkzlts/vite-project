export default function Header({ onGo }) {
  return (
    <header className="sticky top-0 z-50 h-16 border-b border-black/10 bg-white/55 backdrop-blur">
      <div className="mx-auto flex h-full max-w-5xl items-center justify-between px-6">
        {/* LOGO */}
        <button
          onClick={() => onGo("feed")}
          className="group relative flex items-center gap-3 focus:outline-none"
          aria-label="Kiwitter Home"
        >
          {/* small badge */}
          <span className="grid h-9 w-9 place-items-center rounded-2xl bg-white/70 shadow-sm ring-1 ring-black/10 transition group-hover:-translate-y-[1px] group-hover:shadow-md">
            <span className="text-sm font-black text-green-800">K</span>
          </span>

          {/* animated gradient text */}
          <span className="relative text-xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-green-700 via-emerald-600 to-green-700 bg-[length:220%_100%] bg-clip-text text-transparent transition-all duration-500 group-hover:bg-[position:100%_0%]">
              kiwitter
            </span>

            {/* underline */}
            <span className="absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-green-700/80 transition-all duration-300 group-hover:w-full" />
          </span>

          {/* soft glow */}
          <span className="pointer-events-none absolute -inset-2 -z-10 rounded-3xl opacity-0 blur-xl transition duration-300 group-hover:opacity-100 bg-gradient-to-r from-green-400/20 via-emerald-300/10 to-green-400/20" />
        </button>

        {/* PILL NAV */}
        <div className="relative rounded-2xl bg-white/70 p-1 shadow-sm ring-1 ring-black/10 backdrop-blur">
          {/* sliding highlight (default: left / login) */}
          <span className="pointer-events-none absolute left-1 top-1 h-[calc(100%-0.5rem)] w-[calc(50%-0.25rem)] rounded-xl bg-gradient-to-r from-green-700 to-emerald-600 shadow-sm transition-transform duration-300 ease-out" />

          <div className="relative grid grid-cols-2 gap-1">
            <button
              onClick={() => onGo("login")}
              className="rounded-xl px-4 py-2 text-sm font-semibold text-white/95 transition focus:outline-none"
            >
              Giriş Yap
            </button>

            <button
              onClick={() => onGo("register")}
              className="rounded-xl px-4 py-2 text-sm font-semibold text-green-900/80 transition hover:text-green-950 focus:outline-none"
            >
              Kayıt Ol
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}