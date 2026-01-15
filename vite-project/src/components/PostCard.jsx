import { useEffect, useRef, useState } from "react";
import CommentBox from "./CommentBox";

function Icon({ children }) {
  return (
    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full hover:bg-black/5 cursor-pointer">
      {children}
    </span>
  );
}

export default function PostCard({ post, onDelete }) {
  const [showComments, setShowComments] = useState(false);

  // ✅ Menü state’i
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // ✅ dışarı tıklayınca menüyü kapat
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-black/10 p-5">
      <div className="flex gap-4">
        <img
          src={post.avatar || "https://i.pravatar.cc/80?img=12"}
          alt={post.name}
          className="w-14 h-14 rounded-full object-cover"
        />

        <div className="flex-1">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="font-semibold text-green-900">
                {post.name}
                <span className="text-black/50 font-normal ml-1">
                  ({post.username})
                </span>
              </div>

              {/* ✅ text/content/body hangisi varsa onu bas */}
              <p className="text-black/70 mt-1">
                {post.text || post.content || post.body || post.message}
              </p>
            </div>

            {/* ✅ 3 nokta + Sil menüsü */}
            <div className="relative" ref={menuRef}>
              <button
                type="button"
                className="text-xl text-black/40 hover:text-black/60"
                onClick={() => setMenuOpen((v) => !v)}
              >
                ⋮
              </button>

              {menuOpen && (
                <div className="absolute right-0 mt-2 w-36 rounded-xl bg-white shadow-lg ring-1 ring-black/10 overflow-hidden z-10">
                  <button
                    type="button"
                    className="w-full px-4 py-2 text-left text-sm hover:bg-black/5 text-red-600"
                    onClick={() => {
                      setMenuOpen(false);
                      onDelete?.(post.id);
                    }}
                  >
                    Sil (Delete)
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="text-xs text-black/45 mt-3">{post.time}</div>

          <div className="flex items-center gap-6 mt-3 text-sm text-black/50">
            <div className="flex items-center gap-1">
              <Icon>♡</Icon>
              {post.likes}
            </div>

            <div className="flex items-center gap-1">
              <Icon>⟳</Icon>
              {post.reposts}
            </div>

            <div
              className="flex items-center gap-1 cursor-pointer hover:text-black"
              onClick={() => setShowComments(!showComments)}
            >
              <Icon>💬</Icon>
              {post.comments}
            </div>
          </div>

          {/* ✅ yorumlar aynı */}
          {showComments && <CommentBox />}
        </div>
      </div>
    </div>
  );
}