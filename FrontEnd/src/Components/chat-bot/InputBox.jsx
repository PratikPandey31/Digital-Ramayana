import React, { useState } from 'react';
import SearchButton from './SearchButton';
import Search from './assests/Search';
import { useDispatch, useSelector } from 'react-redux';
import { addSearchQuestion, addRightMessage, makeAiPrompt, addQuestionMessage, toggleSearchDisabled } from '../../Features/ramayan/ramayanSlice'

function InputBox() {
  const fontSize = useSelector(state => state.fontSize);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const isSearchDisabled = useSelector(state => state.searchDisabled);

  const handleSubmit = () => {
    if (inputValue === '') return;
    dispatch(addSearchQuestion(inputValue));
    dispatch(addQuestionMessage(inputValue));
    dispatch(toggleSearchDisabled(true));
    dispatch(addRightMessage());
    dispatch(makeAiPrompt());
    setInputValue('');
  }
  return (
    <div>
      <div className='flex'> 
        <label className="relative block ml-2 w-4/5">
          <span className="sr-only">Search</span>
          <input className={`w-full placeholder:italic placeholder:text-slate-400 block bg-yellow-50 border border-slate-300 rounded-full py-2 px-5 shadow-sm focus:outline-none focus:border-orange-300 focus:ring-orange-300 focus:ring-1 disabled:bg-slate-300 disabled:cursor-not-allowed dark:bg-yellow-50/10 dark:text-slate-50 text-${fontSize==1 ? 'sm' : fontSize==2 ? 'md' : 'lg'}`} placeholder="prashn puchiye ..." type="text" name="search" value={inputValue} onChange={handleChange} disabled={isSearchDisabled}
            onKeyDown={
              (e) => {
                if (e.key === 'Enter') {
                  handleSubmit();
                }
              }
            } />
        </label>

        <SearchButton
          icon={<Search color={isSearchDisabled ? "#94a3b8" : ""} />}
          disable={useSelector(state => state.searchDisabled)}
          onClick={
            () => {
              handleSubmit();
            }
          }
        />
      </div>
    </div>
  );
}

export default InputBox;