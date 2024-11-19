import React from 'react'

const Events = () => {
    const handleClick = (e) => {
        console.log(e)
        console.log("Executou");
    };

    // Função de redenrização 
    const rederSomething = (x) => {
        if (x) {
            return <h1>renderizando isso</h1>
        }else {
            return <h1>redenrizando outra coisa</h1>
        }
    }

    return 10 > 2 && <p>Carregando....</p>

  return (
    <div>
        <div>
            <button onClick={() => console.log("Testando um evento")}>Clique aqui</button>
        </div>
        {/*Evento com fumnção */}
        <div>
            <button onClick={handleClick}>Clique aqui com função</button>
        </div>

        {/* função com render */}
        {rederSomething(true)}
        {rederSomething(false)}
    </div>
  )
}

export default Events