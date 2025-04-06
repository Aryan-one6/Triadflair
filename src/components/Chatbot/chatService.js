// chatService.js (client-side)
export const sendToGemini = async (prompt) => {
  const response = await fetch('/api/sendToGemini', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt }),
  });
  const data = await response.json();
  return data.text;
};

export const sendToGroq = async (prompt) => {
  const response = await fetch('/api/sendToGroq', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ prompt }),
  });
  const data = await response.json();
  return data.text;
};

export const searchPinecone = async (query) => {
  const response = await fetch('/api/searchPinecone', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
  });
  const data = await response.json();
  return data.matches;
};
