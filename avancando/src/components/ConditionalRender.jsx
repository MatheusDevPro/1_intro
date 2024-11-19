import React from 'react'

const ConditionalRender = () => {
    const x = true;

    const name = "Matheus"

  return (
    <div>
        {/* 7 RENDER CONDITIONAL */}
        <h3>Isso sera exibido?</h3>
        {x && <p>Se x for true sim!</p>}

        {/* 8 else */}
        {name === "Joao" ?(
            <div>
                <p>Ola joao</p>
            </div>
        ) : (
            <div>
                <p>Nome nao encontrado</p>
            </div>
        )}
    </div>
  )
}

export default ConditionalRender