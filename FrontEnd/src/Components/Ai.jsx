import React, { useState } from 'react'

function Ai() {
  const [response, setResponse] = useState("");
  async function generateText(prompt) {
    const response = await fetch('http://localhost:8000/api', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ prompt })
    });
  
    const data = await response.json();
    setResponse(data);
  }

  generateText('Write a poem about a lonely robot.');
  return (
    <div className='text-2xl text-white'>pranav {response}</div>
  )
}

export default Ai

