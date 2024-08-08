import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import PrivateRoute from './utils/PrivateRoute'
import HomePage from './pages/Home'
import LoginPage from './pages/login'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route element = {<PrivateRoute/>}>
          <Route index element = {<HomePage/>}/>
        </Route>
        <Route path="/login" element= {<LoginPage/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
