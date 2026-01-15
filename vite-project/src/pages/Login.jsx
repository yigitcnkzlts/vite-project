export default function Login({ onSuccess }) {
  return (
    <main className="min-h-[calc(100vh-4rem)] bg-gradient-to-b from-green-700 to-green-600 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white/85 backdrop-blur rounded-3xl shadow-xl border border-black/10 p-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-green-800">
            Hoş Geldin!
          </h1>
          <p className="text-sm text-black/50 mt-1">
            Devam etmek için giriş yap
          </p>
        </div>

        <form className="mt-7 space-y-4">
          <div>
            <label className="text-sm text-black/60">Kullanıcı adı</label>
            <input
              className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-green-400"
              placeholder="kullanici_adi"
            />
          </div>

          <div>
            <label className="text-sm text-black/60">Şifre</label>
            <input
              type="password"
              className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-green-400"
              placeholder="••••••••"
            />
          </div>

          <button
            type="button"
            onClick={() =>
              onSuccess?.({
                name: "Giriş Yapan Kullanıcı",
                username: "kiwitter_user",
                avatar: "https://i.pravatar.cc/80?img=11",
              })
            }
            className="w-full rounded-xl bg-green-700 hover:bg-green-800 text-white font-semibold py-3 mt-2 shadow"
          >
            GİRİŞ
          </button>
        </form>
      </div>
    </main>
  );
}