import React from 'react'
import BookBox from './BookBox.jsx'
import './Marq.css'

function BookPage() {
  const numBooks = [
    {
      name: 'Mahabharat',
      Devnagri: 'महाभारत',
      url: '/mahabharat.jpg'
    }, {
      name: 'Ramayan',
      Devnagri: 'रामायण',
      url: 'ramayan.jpg'
    }, {
      name: 'Veda',
      Devnagri: 'वेद',
      url: '/vedas.jpg'
    },

  ];

  return (
    <div className='rounded-xl bg-white/25 backdrop-blur-xl my-5 w-11/12 mx-auto slider-container dark:bg-black/40'>
      <h1 className='font-baloo text-5xl font-semibold text-center py-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-red-500 leading-relaxed tracking-normal w-2/5 mx-auto'>
        Smart Digital Library
      </h1>
      <div className='pl-28'>
        <div className='flex'>
          {numBooks.map((book) => {
            return <BookBox {...book} key={book.name} />;
          })}

        </div>
      </div>
    </div>
  )

}

export default BookPage