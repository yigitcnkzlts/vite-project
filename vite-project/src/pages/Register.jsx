import { useState } from "react";

export default function Register({ onSuccess }) {
  const [form, setForm] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // çok basit doğrulama (boşsa çıkmasın)
    if (!form.fullName || !form.username || !form.email || !form.password) {
      alert("Lütfen tüm alanları doldur.");
      return;
    }

    // burada normalde API'ye kayıt isteği atılır
    const user = {
      name: form.fullName,
      username: form.username,
      email: form.email,
      avatar: `https://i.pravatar.cc/80?u=${encodeURIComponent(form.email)}`,
    };

    onSuccess?.(user); // ✅ App -> setPage("home")
  };

  return (
    <main className="min-h-[calc(100vh-4rem)] bg-gradient-to-b from-green-700 to-green-600 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white/85 backdrop-blur rounded-3xl shadow-xl border border-black/10 p-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-green-800">Hoş Geldin!</h1>
          <p className="text-sm text-black/50 mt-1">Hesap oluştur ve katıl</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-7 space-y-4">
          <div>
            <label className="text-sm text-black/60">İsim Soyisim</label>
            <input
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Ad Soyad"
            />
          </div>

          <div>
            <label className="text-sm text-black/60">Kullanıcı adı</label>
            <input
              name="username"
              value={form.username}
              onChange={handleChange}
              className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-green-400"
              placeholder="kullaniciadi"
            />
          </div>

          <div>
            <label className="text-sm text-black/60">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-green-400"
              placeholder="ornek@mail.com"
            />
          </div>

          <div>
            <label className="text-sm text-black/60">Şifre</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-green-400"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-green-700 hover:bg-green-800 text-white font-semibold py-3 mt-2 shadow"
          >
            KAYIT OL
          </button>
        </form>
      </div>
    </main>
  );
}