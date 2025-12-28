import React, { useState, useEffect } from "react";

export default function PostsList() {
  const [posts, setPosts] = useState([]);        // Data
  const [loading, setLoading] = useState(true);  // Loading state
  const [error, setError] = useState(null);      // Error state

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );

        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }

        const data = await response.json();
        setPosts(data.slice(0, 10)); // Just show 10 items
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []); // Empty dependency array → runs once on mount

  if (loading) return <p>Loading...</p>;
  if (error)   return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div style={{ width: "420px", margin: "40px auto" }}>
      <h2>Posts List</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id} style={{ marginBottom: "10px" }}>
            <strong>{post.title}</strong>
            <br />
            <span>{post.body}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
