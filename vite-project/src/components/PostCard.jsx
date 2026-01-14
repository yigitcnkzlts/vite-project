import { useState } from "react";
import CommentBox from "./CommentBox";

function Icon({ children }) {
  return (
    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full hover:bg-black/5 cursor-pointer">
      {children}
    </span>
  );
}

export default function PostCard({ post }) {
  const [showComments, setShowComments] = useState(false);

  return (
    <div className="bg-white/80 backdrop-blur rounded-2xl shadow-sm border border-black/10 p-5">
      <div className="flex gap-4">
        <img
          src={post.avatar}
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

              <p className="text-black/70 mt-1">{post.text}</p>
            </div>

            <button className="text-xl text-black/40 hover:text-black/60">
              ⋮
            </button>
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

          {showComments && <CommentBox />}
        </div>
      </div>
    </div>
  );
}