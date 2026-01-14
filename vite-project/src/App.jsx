import { useState } from "react";
import Header from "./components/Header";
import Feed from "./pages/Feed";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
  const [page, setPage] = useState("feed"); // feed | login | register

  return (
    <div className="min-h-screen">
      <Header onGo={setPage} />

      {page === "feed" && <Feed />}
      {page === "login" && <Login />}
      {page === "register" && <Register />}
    </div>
  );
}