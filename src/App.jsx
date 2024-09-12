import { useEffect, useState } from "react";
import { Navbar } from "./components/navbar.jsx";

import "./App.css";

export function MainApp() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPostData() {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();

      setPosts(data);
    }

    getPostData();
  }, []);

  return (
    <>
      <Navbar />
      <main className="mainApp-container">
        <h1>Webpack with SWC</h1>
        <p>This is the main app</p>

        <section className="posts-container">
          <h2>Posts</h2>
          <ul>
            {posts.map((post) => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}
