export default function Header({ onGo, active = "login" }) {
  const activeIndex =
    active === "profile" ? 0 : active === "login" ? 1 : 2; // profile | login | register

  return (
    <header className="sticky top-0 z-50 h-16 border-b border-black/10 bg-white/55 backdrop-blur">
      <div className="mx-auto flex h-full max-w-5xl items-center justify-between px-6">
        {/* LOGO */}
        <button
          onClick={() => onGo("feed")}
          className="group relative flex items-center gap-3 focus:outline-none"
          aria-label="Kiwitter Home"
        >
          <span className="grid h-9 w-9 place-items-center rounded-2xl bg-white/70 shadow-sm ring-1 ring-black/10 transition group-hover:-translate-y-[1px] group-hover:shadow-md">
            <span className="text-sm font-black text-green-800">K</span>
          </span>

          <span className="relative text-xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-green-700 via-emerald-600 to-green-700 bg-[length:220%_100%] bg-clip-text text-transparent transition-all duration-500 group-hover:bg-[position:100%_0%]">
              kiwitter
            </span>
            <span className="absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-green-700/80 transition-all duration-300 group-hover:w-full" />
          </span>

          <span className="pointer-events-none absolute -inset-2 -z-10 rounded-3xl opacity-0 blur-xl transition duration-300 group-hover:opacity-100 bg-gradient-to-r from-green-400/20 via-emerald-300/10 to-green-400/20" />
        </button>

        {/* PILL NAV (3 BUTTON) */}
        <div className="relative rounded-2xl bg-white/70 p-1 shadow-sm ring-1 ring-black/10 backdrop-blur">
          {/* sliding highlight (1/3 width) */}
          <span
            className="pointer-events-none absolute left-1 top-1 h-[calc(100%-0.5rem)] w-[calc(33.333%-0.25rem)] rounded-xl bg-gradient-to-r from-green-700 to-emerald-600 shadow-sm transition-transform duration-300 ease-out"
            style={{ transform: `translateX(${activeIndex * 100}%)` }}
          />

          <div className="relative grid grid-cols-3 gap-1">
            {/* ✅ PROFİLİM */}
            <button
              onClick={() => onGo("profile")}
              className={`rounded-xl px-4 py-2 text-sm font-semibold transition focus:outline-none ${
                active === "profile"
                  ? "text-white/95"
                  : "text-green-900/80 hover:text-green-950"
              }`}
            >
              Profilim
            </button>

            {/* ✅ GİRİŞ */}
            <button
              onClick={() => onGo("login")}
              className={`rounded-xl px-4 py-2 text-sm font-semibold transition focus:outline-none ${
                active === "login"
                  ? "text-white/95"
                  : "text-green-900/80 hover:text-green-950"
              }`}
            >
              Giriş Yap
            </button>

            {/* ✅ KAYIT */}
            <button
              onClick={() => onGo("register")}
              className={`rounded-xl px-4 py-2 text-sm font-semibold transition focus:outline-none ${
                active === "register"
                  ? "text-white/95"
                  : "text-green-900/80 hover:text-green-950"
              }`}
            >
              Kayıt Ol
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}