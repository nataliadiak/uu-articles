import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001/api";

export default function App() {
  const [articles, setArticles] = useState([]);
  const [form, setForm] = useState({ title: "", author: "", content: "" });

  useEffect(() => {
    fetch(`${API_URL}/articles`)
      .then((res) => res.json())
      .then(setArticles)
      .catch(() => setArticles([]));
  }, []);

  async function onSubmit(event) {
    event.preventDefault();
    const response = await fetch(`${API_URL}/articles`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    if (!response.ok) return;

    const created = await response.json();
    setArticles((items) => [created, ...items]);
    setForm({ title: "", author: "", content: "" });
  }

  return (
    <main className="page">
      <h1>UU Articles — MERN Iteration 1</h1>
      <p>Corporate framework dependencies removed. Basic React + Express + MongoDB CRUD shell is live.</p>

      <form className="card" onSubmit={onSubmit}>
        <h2>Create Article</h2>
        <input
          required
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <input
          required
          placeholder="Author"
          value={form.author}
          onChange={(e) => setForm({ ...form, author: e.target.value })}
        />
        <textarea
          required
          placeholder="Content"
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
        />
        <button type="submit">Publish</button>
      </form>

      <section>
        <h2>Articles</h2>
        {articles.length === 0 ? <p>No articles yet.</p> : null}
        <ul className="list">
          {articles.map((article) => (
            <li key={article._id} className="card">
              <h3>{article.title}</h3>
              <p>{article.content}</p>
              <small>By {article.author}</small>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
