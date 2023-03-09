import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {HashRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home'
import Movie from './pages/Movie'
import Search from './pages/Search'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Home />}/>
          <Route path='/movie/:id' element={<Movie />}/>
          <Route path='/search' element={<Search />}/>
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
)
