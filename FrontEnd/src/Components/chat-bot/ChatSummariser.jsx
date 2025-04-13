import React from 'react'
import LeftMsgBox from './LeftMsgBox'
import RightMsgBox from './RightMsgBox'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../Book-Viewer/Button'
import QuestionBox from './QuestionBox'
import InputBox from './InputBox'
import { addSearchQuestion, addQuestionMessage, toggleSearchDisabled, addRightMessage, makeAiPrompt, updateRightMessage, resetAi } from '../../Features/ramayan/ramayanSlice'
import { GoogleGenerativeAI } from '@google/generative-ai';
import { useEffect, useState } from 'react';

function QuickQuestionsButton({ text, disabled }) {
  const fontSize = useSelector(state => state.fontSize);
  const dispatch = useDispatch();
  const [aiResponse, setAiResponse] = useState(null);

  const searchAi = useSelector(state => state.searchAi);
  const prashna = useSelector(state => state.aiPrompt);

  useEffect(() => {
    if (searchAi) {
      const genAI = new GoogleGenerativeAI("AIzaSyCjX00yVb9fbGM9AmHtKC6E_XWVOR_0TLc");
      async function run() {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const chat = model.startChat({
          history: [
            {
              role: "user",
              parts: [{ text: "namaskar", }],
            },
            {
              role: "model",
              parts: [{ text: "Namaste!" }],
            },
            {
              role: "user",
              parts: [{ text: "आपको एक वाल्मीकि रामायण के ज्ञाता की तरह व्यवहार करना है। हम आपसे कुछ श्लोक और उसे जुडा एक प्रश्न पूछेंगे और उसका सातिक उत्तर देना है" }],
            },
            {
              role: "model",
              parts: [{ text:
                "ठीक है।  मैं वाल्मीकि रामायण के एक विद्वान की तरह व्यवहार करने का प्रयास करूँगा।  आप अपने श्लोक और प्रश्न पूछ सकते हैं। मैं अपने ज्ञान के अनुसार सर्वोत्तम उत्तर देने की कोशिश करूँगा।\n"
              }],
            },
            {
              role: "user",
              parts: [{ text: "कोसलो नाम मुदितस्स्फीतो जनपदो महान् ।निविष्टस्सरयूतीरे प्रभूतधनधान्यवान् ।।1.5.5।।" }],
            },
            {
              role: "model",
              parts: [{ text: "यह श्लोक वाल्मीकि रामायण के बालकाण्ड के पाँचवें सर्ग का पाँचवाँ श्लोक है।  इस श्लोक का अर्थ है:\n\n\"कोसल नाम का जो जनपद था, वह अत्यंत सुख और समृद्धि से परिपूर्ण था,  सुरयू नदी के तट पर बसा हुआ था और अत्यधिक धन और अन्न से संपन्न था।\"\n\n\n**इस श्लोक से जुड़ा एक प्रश्न यह हो सकता है:**  इस श्लोक से कोसल देश के बारे में क्या जानकारी मिलती है?\n\n\n**उत्तर:** इस श्लोक से कोसल देश के बारे में यह जानकारी मिलती है कि यह एक समृद्ध और खुशहाल देश था, जो सरयू नदी के तट पर स्थित था और धन-धान्य से भरपूर था।  यह देश की भौगोलिक स्थिति और आर्थिक समृद्धि का वर्णन करता है।\n" }],
            }
          ],
        });
        let result = await chat.sendMessage(prashna);
        return result.response.text();
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
  return (
    <div className='mr-2 my-2'>
      <Button
        customStyles={`bg-orange-100 hover:border-orange-300 hover:bg-orange-200 dark:hover:bg-slate-300 dark:bg-slate-300 dark:text-black text-${fontSize==1 ? 'sm' : fontSize==2 ? 'md' : 'lg'}`}
        disabled={disabled}
        onClick={
          () => {
            dispatch(addSearchQuestion(text));
            dispatch(addQuestionMessage(text));
            dispatch(toggleSearchDisabled(true));
            dispatch(addRightMessage());
            dispatch(makeAiPrompt());
          }
        }
      >
        {text}
      </Button>
    </div>
  )
}


function ChatSummariser() {
  const chat = useSelector(state => state.chat);

  return (
    <div className='rounded-md border-2 w-1/4 flex flex-col h-full mr-3 dark:border-slate-600'>

      <div className='bg-white z-10 text-center py-2 text-xl font-semibold font-baloo text-slate-600 dark:text-slate-800 w-auto border-b-2 rounded-t-md dark:bg-slate-200'>
        AI chat with the book
      </div>

      <div className='overflow-scroll overflow-x-hidden h-full scrollbar'>
        {chat.map((msg) => {
          if (msg.type === "left") {
            return <LeftMsgBox message={msg.text} key={msg.id} />
          } else if (msg.type === "right") {
            return <RightMsgBox message={msg.text} key={msg.id} />
          } else {
            return <QuestionBox message={msg.text} key={msg.id} />
          }
        })}
      </div>

      <div className='my-2 border-t-2 pb-1 dark:border-slate-600'> {/* bottom */}
        <div className='pl-2 mb-2 flex overflow-x-auto whitespace-nowrap justify-evenly mini-scrollbar'> {/* question buttons */}
          <QuickQuestionsButton text={"इस श्लोक का भावार्थ बताए"} disabled={useSelector(state => state.searchDisabled)} />
          <QuickQuestionsButton text={"इस श्लोक में शब्दार्थ बताए"} disabled={useSelector(state => state.searchDisabled)} />
          <QuickQuestionsButton text={"kuch bataiye"} disabled={useSelector(state => state.searchDisabled)} />
        </div>

        <InputBox />
      </div>
    </div>
  )
}

export default ChatSummariser