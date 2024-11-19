import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// templat FirstComponent
import FirstComponent from './components/FirstComponent'
//TemplateExpression
import TemplateExpression from './components/TemplateExpression'
// MyComponent
import MyComponent from './components/MyComponent'
import Events from './components/Events'


function App() {
  const [count, setCount] = useState(0)

  return (
      // COMENTARIOS

      <div className="card">

        {/*Comentario em React*/}
         <h1>Meu projeto.</h1>
         <TemplateExpression/>
         <FirstComponent />
         <MyComponent/>
         <Events/>
         <button>Meu botao</button>
      </div>
      
    
  )
}

export default App
