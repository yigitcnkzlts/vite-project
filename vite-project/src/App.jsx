import { useState } from "react";
import Header from "./components/Header";
import Feed from "./pages/Feed";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home"; // 🔹 EKLENDİ
import Profile from "./pages/Profile"; // ✅ YENİ EKLENDİ

export default function App() {
  const [page, setPage] = useState("feed"); // feed | login | register | home | profile ✅
  const [currentUser, setCurrentUser] = useState(null); // 🔹 EKLENDİ

  const handleAuthSuccess = (user) => {
    setCurrentUser(user);
    setPage("home");
  };

  return (
    <div className="min-h-screen">
      {/* Header aynı, sadece home'da da görünsün */}
      <Header onGo={setPage} />

      {page === "feed" && <Feed />}
      {page === "login" && <Login onSuccess={handleAuthSuccess} />}
      {page === "register" && <Register onSuccess={handleAuthSuccess} />}
      {page === "home" && <Home currentUser={currentUser} />}

      {/* ✅ PROFİL SAYFASI (Yeni site gibi açılacak) */}
      {page === "profile" && <Profile currentUser={currentUser} />}
    </div>
  );
}