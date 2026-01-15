import { useMemo, useState } from "react";
import PostCard from "../components/PostCard";
import { posts as seedPosts } from "../data/posts";

function formatTimeNow() {
  return "just now";
}

export default function Profile({ currentUser }) {
  // sadece profil için demo tweetler
  const initialPosts = useMemo(() => {
    return seedPosts.slice(0, 10).map((p, i) => ({
      ...p,
      id: i + 1,
      name: currentUser?.name || "Misafir",
      username: currentUser?.username || "guest",
      avatar: currentUser?.avatar || "https://i.pravatar.cc/80?img=15",
      text: p.text || p.content || p.body,
      time: p.time || "1 gün önce",
    }));
  }, [currentUser]);

  const [text, setText] = useState("");
  const [list, setList] = useState(initialPosts);

  const handleSend = () => {
    const t = text.trim();
    if (!t) return;

    const newPost = {
      id: Date.now(),
      name: currentUser?.name || "Misafir",
      username: currentUser?.username || "guest",
      avatar: currentUser?.avatar || "https://i.pravatar.cc/80?img=15",
      text: t,
      time: formatTimeNow(),
      likes: 0,
      reposts: 0,
      comments: 0,
    };

    setList((prev) => [newPost, ...prev]);
    setText("");
  };

  return (
    <main className="min-h-[calc(100vh-4rem)] bg-gradient-to-b from-green-800 via-green-700 to-green-900">
      <div className="mx-auto max-w-5xl px-6 py-10">

        {/* 🔹 PROFİL ÜST KISMI (AYNI KALDI) */}
        <section className="rounded-3xl bg-white/10 border border-white/20 backdrop-blur p-10 text-white mb-10">
          <div className="flex flex-col items-center text-center gap-4">
            <img
              src={currentUser?.avatar || "https://i.pravatar.cc/140?img=15"}
              alt="profile"
              className="w-28 h-28 rounded-full object-cover border-4 border-white/50 shadow-xl"
            />
            <h1 className="text-4xl font-extrabold">
              {currentUser?.name || "Misafir"}
            </h1>
            <p className="text-white/70">
              @{currentUser?.username || "guest"}
            </p>

            <div className="mt-6 grid grid-cols-3 gap-4 w-full max-w-md">
              <div className="rounded-2xl bg-white/10 p-4">
                <div className="text-2xl font-bold">{list.length}</div>
                <div className="text-white/70 text-sm">Gönderi</div>
              </div>
              <div className="rounded-2xl bg-white/10 p-4">
                <div className="text-2xl font-bold">128</div>
                <div className="text-white/70 text-sm">Takipçi</div>
              </div>
              <div className="rounded-2xl bg-white/10 p-4">
                <div className="text-2xl font-bold">93</div>
                <div className="text-white/70 text-sm">Takip</div>
              </div>
            </div>
          </div>
        </section>

        {/* ✍️ PROFİLDE YAZI YAZMA */}
        <div className="bg-white/85 backdrop-blur rounded-3xl shadow-xl border border-black/10 p-6 mb-8">
          <div className="flex items-start gap-4">
            <img
              src={currentUser?.avatar || "https://i.pravatar.cc/80?img=15"}
              alt="avatar"
              className="w-12 h-12 rounded-full object-cover"
            />

            <div className="flex-1">
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                maxLength={160}
                placeholder="Profilinde ne paylaşmak istiyorsun?"
                className="w-full min-h-[110px] rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-green-400 resize-none"
              />
              <div className="flex items-center justify-between mt-3">
                <span className="text-xs text-black/50">
                  {text.length}/160
                </span>

                <button
                  type="button"
                  onClick={handleSend}
                  className="rounded-xl bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-2 shadow disabled:opacity-50"
                  disabled={!text.trim()}
                >
                  Paylaş
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 🧵 PROFİL AKIŞI */}
        <div className="space-y-6">
          {list.map((p) => (
            <PostCard key={p.id} post={p} />
          ))}
        </div>

      </div>
    </main>
  );
}