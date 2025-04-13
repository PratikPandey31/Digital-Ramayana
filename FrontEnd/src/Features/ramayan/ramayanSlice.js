import { nanoid, createSlice } from "@reduxjs/toolkit";

const initialState = {
  kandas: [
    { 
      image: "/ram-darbar.png",
      hindi: "बालकाण्ड",
      ipa: "bālakāṇḍa",
      english: "Bal Kand",
      url: "balKand/1",
    },
  ],
  sargas: [
    { SargaNumber: '1', SargaHindi: '१' },
    { SargaNumber: '2', SargaHindi: '२' },
    { SargaNumber: '3', SargaHindi: '३' },
    { SargaNumber: '4', SargaHindi: '४' },
    { SargaNumber: '5', SargaHindi: '५' },
    { SargaNumber: '6', SargaHindi: '६' },
    { SargaNumber: '7', SargaHindi: '७' },
    { SargaNumber: '8', SargaHindi: '८' },
  ],
  shlokas: [
    {
      id: "१-१-१",
      shlokaNumber: "१",
      text: "तपस्स्वाध्यायनिरतं तपस्वी वाग्विदां वरम् । नारदं परिपप्रच्छ वाल्मीकिर्मुनिपुङ्गवम् ।।१-१-१",
      shlokaIpa: "tapassvādhyāyanirataṃ tapasvī vāgvidāṃ varam | nāradaṃ paripapraccha vālmīkirmunipuṅgavam ||1-1-1",
      shlokaEng: "Ascetic Valmiki enquired of Narada, preeminent among the sages ever engaged in the practice of religious austerities or study of the Vedas and best among the eloquent. [1-1-1]"
    },
  ],
  chat: [],
  currentRightMessage: null,
  searchDisabled: false,
  searchShloka: "",
  searchQuestion: "",
  aiPrompt: "",

  searchAi: false,
  aiResponse: "",
  play: false,
  translate: false,
  vocabulary: false,

  theme: "dark",
  fontSize: 3,
};

export const ramayanSlice = createSlice({
  name: "ramayan",
  initialState,
  reducers: {
    addRamayan: (state, action) => {
      state.shlokas = action.payload;
    },
    addLeftMessage: (state, action) => {
      const leftMessage = {
        id: nanoid(),
        type: "left",
        text: action.payload,
      }
      state.chat.push(leftMessage);
    },
    addRightMessage: (state, action) => {
      const rightMessage = {
        id: nanoid(),
        type: "right",
        text: action.payload,
      }
      state.chat.push(rightMessage);
      state.currentRightMessage = rightMessage.id;
    },
    updateRightMessage: (state, action) => {
      const index = state.chat.findIndex((msg) => msg.id === state.currentRightMessage);
      state.chat[index].text = action.payload.text;
    },
    addQuestionMessage: (state, action) => {
      const questionMessage = {
        id: nanoid(),
        type: "question",
        text: action.payload,
      }
      state.chat.push(questionMessage);
    },
    addSearchShloka: (state, action) => {
      state.searchShloka = action.payload;
    },
    addSearchQuestion: (state, action) => {
      state.searchQuestion = action.payload;
    },
    toggleSearchDisabled: (state) => {
      state.searchDisabled = !state.searchDisabled;
    },
    makeAiPrompt: (state) => {
      if (state.searchShloka === "") {
        state.aiPrompt = state.searchQuestion;
      } else {
        state.aiPrompt = state.searchShloka + " " + state.searchQuestion;
      }
      state.searchAi = true;
    },
    resetAi: (state) => {
      state.searchAi = false;
      state.aiResponse = "";
      state.aiPrompt = "";
      state.searchDisabled = false;
    },
    togglePlay: (state) => {
      state.play = !state.play;
    },
    toggleTranslate: (state) => {
      state.translate = !state.translate;
    },
    toggleVocabulary: (state) => {
      state.vocabulary = !state.vocabulary;
    },
    changeTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
    setFontSize: (state, action) => {
      state.fontSize = action.payload;
    },
  },
});

export const { addRamayan, addLeftMessage, addRightMessage, updateRightMessage, addSearchShloka, addSearchQuestion, addQuestionMessage, toggleSearchDisabled, makeAiPrompt, resetAi, togglePlay, toggleTranslate, toggleVocabulary, changeTheme, setFontSize } = ramayanSlice.actions;
export default ramayanSlice.reducer;