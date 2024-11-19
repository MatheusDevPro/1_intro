import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyForm from './components/MyForm'


function App() {
  
  return (
    <>
    
      <div className="card">
        {/* Formularios */}
        <h1>Form em react</h1>
        <MyForm />
      </div>

    </>
  )
}

export default App
