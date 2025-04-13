if (searchAi) {
  fetch('https://api.openai.com/v1/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: 'text-davinci-003',
      prompt: shlokaHindi,
      temperature: 0.7,
      max_tokens: 100,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0
    })
  })
    .then(response => response.json())
    .then(data => {
      setAiResponse(data.choices[0].text);
      setSearchAi(false);
    })
    .catch(error => {
      console.error('Error:', error);
      setSearchAi(false);
    });
} else {
  setAiResponse(null);
}