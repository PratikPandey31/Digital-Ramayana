import React from 'react'
import ReactDOM from "react-dom/client"
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './layout'
import { Home, About, NotFound, BookViewerPage } from './Components'
import KandPage from './Components/Book-Viewer/KandPage'
import { Provider } from 'react-redux'
import { store } from "./App/store";
import Registration from './Components/Auth/Registration'
import Login from './Components/Auth/Login'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />} />
        <Route path='ramayan' element={<KandPage />} />
        <Route path='about' element={<About />} />
        <Route path="login" element={<Login/>} />
        <Route path="register" element={<Registration/>} />
        <Route path='*' element={<NotFound />} />
      </Route>

      <Route path='/' >
      <Route path='/ramayan/balkand' element={<BookViewerPage  />} />
        <Route path='/ramayan/balkand/:id' element={<BookViewerPage  />} />
        <Route path='ramayan/balkand/:id/:subId' element={<BookViewerPage />} />
        <Route path='' element={<BookViewerPage />} />
      </Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
