import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MusicApp from './components/MusicApp/MusicApp'
import Playground from './components/Playground/Playground'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/playground" element={<Playground />} />
            <Route path="/music" element={<MusicApp />} />
        </Routes>
    </BrowserRouter>
    // <React.StrictMode>
    //   <App />
    // </React.StrictMode>
)
