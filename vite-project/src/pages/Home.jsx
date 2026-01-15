import { useMemo, useState } from "react";
import PostCard from "../components/PostCard";
import { posts as seedPosts } from "../data/posts";

function formatTimeNow() {
  return "just now";
}

export default function Home({ currentUser }) {
  const initialPosts = useMemo(() => {
    const expanded = [];
    let id = 1;

    while (expanded.length < 40) {
      for (const p of seedPosts) {
        if (expanded.length >= 40) break;
        expanded.push({
          ...p,
          id: id++,
          name: p.name,
          username: p.username,
          avatar: p.avatar || "https://i.pravatar.cc/80?img=12",
          likes: Math.floor(Math.random() * 90) + 1,
          reposts: Math.floor(Math.random() * 30) + 1,
          comments: Math.floor(Math.random() * 40) + 1,
        });
      }
    }
    return expanded;
  }, []);

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

  // ✅ DELETE: sadece state’ten kaldırır
  const handleDelete = (id) => {
    setList((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <main className="min-h-[calc(100vh-4rem)] bg-gradient-to-b from-indigo-950 via-indigo-900 to-indigo-950">
      <div className="mx-auto max-w-5xl px-6 py-8">
        {/* düşünce yaz kutusu */}
        <div className="bg-white/85 backdrop-blur rounded-3xl shadow-xl border border-black/10 p-6">
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
                placeholder="Düşüncelerini yaz..."
                className="w-full min-h-[110px] rounded-2xl border border-black/10 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-400 resize-none"
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
                  Gönder
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* akış */}
        <div className="mt-8 space-y-6">
          {list.map((p) => (
            <PostCard
              key={p.id}
              post={p}
              onDelete={handleDelete} // ✅ silmeyi PostCard’dan çağıracağız
            />
          ))}
        </div>
      </div>
    </main>
  );
}