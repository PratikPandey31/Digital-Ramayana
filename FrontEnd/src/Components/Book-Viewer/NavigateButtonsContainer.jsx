import React, { useState } from 'react';
import PrevButton from './PrevButton';
import NextButton from './NextButton';
import { useLocation } from 'react-router-dom';

function NavigateButtonsContainer() {
  const location = useLocation();
  const currentUrl = location.pathname + location.search + location.hash;
  const urlSegments = currentUrl.split('/');
  let id = urlSegments[urlSegments.length - 1] || urlSegments[urlSegments.length - 2];
  let subid;
  if (id.length >= 2) {
    subid = id;
    id = urlSegments[urlSegments.length - 2] || urlSegments[urlSegments.length - 3];
  }
  const [shlokaNo, setShlokaNo] = useState(5); //10

  let prev;
  if (shlokaNo <= 10) {
    prev = `0${shlokaNo-9}-0${shlokaNo-5}`;
  } else if (shlokaNo <= 15) {
    prev = `0${shlokaNo-9}-${shlokaNo-5}`
  } else {
    prev = `${shlokaNo-9}-${shlokaNo-5}`;
  }
  const next = shlokaNo < 10 ? `0${shlokaNo+1}-${shlokaNo+5}` : `${shlokaNo+1}-${shlokaNo+5}`;

  return (
    <div className='w-full flex justify-between px-8'>
      {shlokaNo > 5 && <PrevButton sarga={id} shloka={prev} symbol={'<'} setState={() => setShlokaNo((no) => no - 5)}/>}
      <NextButton sarga={id} shloka={next} symbol={'>'} setState={() => setShlokaNo((no) => no + 5)}/>
    </div>
  );
}

export default NavigateButtonsContainer;