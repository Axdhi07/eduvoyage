import { useState } from 'react';

export default function Home() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: input }),
    });
    const data = await res.json();
    setResponse(data.response);
  };

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>EduVoyage AI</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Your field or interest"
          style={{ padding: '0.5rem', width: '60%' }}
        />
        <button type="submit" style={{ marginLeft: '1rem' }}>Ask</button>
      </form>
      <div style={{ marginTop: '2rem' }}>
        <strong>AI Response:</strong>
        <p>{response}</p>
      </div>
    </main>
  );
}