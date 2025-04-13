import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateRightMessage, resetAi } from '../../Features/ramayan/ramayanSlice';
import {GoogleGenerativeAI} from '@google/generative-ai';
import dotenv from 'dotenv'
dotenv.config();

function AiChat() {
  const dispatch = useDispatch();
  const [aiResponse, setAiResponse] = useState(null);

  const searchAi = useSelector(state => state.searchAi);
  const geminiApiKey = process.env.gemini_api_key;

  useEffect(() => {
    if (searchAi) {
      const genAI = new GoogleGenerativeAI();
      async function run() {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        try {
          const result = await model.generateContent(["hi"]);
          return result.response.text();
        } catch (error) {
          if (error) {
            throw error;
          }
        }
      }
      run()
        .then(result => {
          setAiResponse(result);
          dispatch(resetAi());
        })
        .catch(error => {
          console.error('Error:', error);
          dispatch(resetAi());
        });
    } else {
      setAiResponse(null);
    }
  }, [searchAi]);

  useEffect(() => {
    if (aiResponse) {
      let newAiResponse = aiResponse.replace(/\*\*(.*?)\*\*/g, (match, group) => {
        return `<b>${group}</b>`;
      });
      dispatch(updateRightMessage({ text: newAiResponse }));
    }
  }, [aiResponse]);
}

export default AiChat;