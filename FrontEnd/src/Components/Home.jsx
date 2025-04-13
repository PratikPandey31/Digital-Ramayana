import React, { useState, useEffect } from 'react';
import BookPage from './Home/BookPage';

function Home() {
  return (

    <div>
      <div className='h-screen w-screen'>
        <BookPage />
      </div>
    </div>
  )
}

export default Home
