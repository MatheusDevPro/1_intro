import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

 {/* 2 -  Imagens assets */}
 import museu from './assets/museu.png'

// 3 - useState
import Data from './components/data'

// 4 - redenrização de listas
import ListRender from './components/ListRender'

// 7 render conditional
import ConditionalRender from './components/conditionalRender'

// 8 props 
import ShowUsersName from './components/ShowUsersName'


// 9 Desestruturando props
import CarDetails from './components/CarDetails'

// 11 Rederização de lista com componentes
const cars = [
  {id: 1, brand: "Ferrari", color: "Amarelo", Km: 0},
  {id: 2, brand: "KIA", color: "Branco", Km: 200000},
  {id: 3, brand: "Renault", color: "Azul", Km: 320000},
];

// Fragment
//import Fragment from './components/Fragment'

import Container from './components/Container'

function App() {
  const [count, setCount] = useState(0)

  return (
   
      <div className="card">
        <h1>Avançando em React Js teste</h1>
        {/* 1 imagem em public */}
        <img src='/depoimento.png' alt='Depoimentos'/>

        {/* 2 Imagens assets */}
        <img src={museu} alt="foto museu" />

        {/* useState */}
        <Data/>

        {/* 4 redenrização de listas */}
        <ListRender/>

        {/* 7 render conditional */}
        <ConditionalRender />

        {/* 8 props */}
        <ShowUsersName name="Matheus" />

        {/* 9 Desestruturando props */}
        <CarDetails brand="VW" Km={999} color="vermelho" />

        {/* 10 Reaproveitando componente */}
        <CarDetails brand="Fiat" Km={121212} color="Preto" />
        <CarDetails brand="Audi" Km={0} color="Azul" />

        {/* 11 Renderizacao de lista com componentes */}
        {cars.map((car) => (
          <CarDetails key={car.id} brand={car.brand} color={car.color} Km={car.Km}/>
        ))}

        {/* 12 Fragment */}
       {/* <Fragment /> */}

       {/* 13 children */}
       {/* <Container> */}
         {/* <p>Alguma coisa.</p> */}
       {/* </Container> */}
        
      </div>
     
  )
}

export default App
