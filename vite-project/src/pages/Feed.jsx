import { useMemo, useState } from "react";
import Tabs from "../components/Tabs";
import PostCard from "../components/PostCard";
import { posts as seedPosts } from "../data/posts";

export default function Feed() {
  const [active, setActive] = useState("normal"); // normal | top
  const [items, setItems] = useState(seedPosts); // ✅ post listesi state

  const list = useMemo(() => {
    if (active === "top") {
      return [...items].sort((a, b) => b.likes - a.likes);
    }
    return items;
  }, [active, items]);

  const handleDelete = (id) => {
    setItems((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <main className="min-h-[calc(100vh-4rem)] bg-gradient-to-b from-green-700 to-green-600">
      <div className="mx-auto max-w-5xl px-6 py-8">
        <Tabs active={active} setActive={setActive} />

        <div className="mt-6 space-y-6">
          {list.map((post) => (
            <PostCard key={post.id} post={post} onDelete={handleDelete} />
          ))}
        </div>
      </div>
    </main>
  );
}