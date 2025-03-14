import { useEffect, useState } from "react";
import { Navbar } from "../components/navbar";

import "./posts.css";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getPostData() {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!res.ok) throw Error("There was en error when fetching");

      const data = await res.json();
      setPosts(data);
      setIsLoading(false);
    }

    getPostData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Navbar />

      <section className="posts-container">
        <h2>Posts</h2>
        <p className="posts-description">
          Using the{" "}
          <a
            href="https://jsonplaceholder.typicode.com"
            target="_blank"
            rel="noreferrer"
          >
            JSONPlaceholder API
          </a>
        </p>
        <ul>
          {posts.length > 0 ? (
            posts.map((post) => <li key={post.id}>{post.title}</li>)
          ) : (
            <p>No posts available</p>
          )}
        </ul>
      </section>
    </>
  );
}
