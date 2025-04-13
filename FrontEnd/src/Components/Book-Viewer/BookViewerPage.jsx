import React from 'react'
import SargaContainer from './SargaContainer'
import ShlokaContainer from './ShlokaContainer'
import ChatSummariser from '../chat-bot/ChatSummariser'
import Header from '../Header'

function BookViewerPage() {
  return (
    <div className='h-screen bg-slate-50 dark:bg-slate-900'>
      <Header />
      <div className='w-full flex justify-between h-[90%] mt-1'>
        <SargaContainer />
        <ShlokaContainer />
        <ChatSummariser />
      </div>
    </div>
  )
}

export default BookViewerPage