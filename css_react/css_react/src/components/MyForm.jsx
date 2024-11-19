import "./MyForm.css";

import { useState } from "react";

const MyForm = () => {
    // 3 gerenciamento de dados 
    const [name, setName] = useState();
    const [email, setEmail] = useState();

    const handleName = (e) => {
        setName(e.target.value);
    }

    // envio de formulario
    const handleSubmit = (e) => {
        e.preventDfault();

        console.log(name, email)
    }
    
    console.log(name, email)

  return (
    <div>
        {/* 1 Criação de formularios */}
        {/* 5 envio de formulario */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" placeholder="Digite seu nome" onChange={handleName} />
            </div>
            {/* 2 Input dentro de label */}
            <label>
                <span>E-mail</span>
                {/* 4 simplificando manipulação */}
                <input type="text" name="email" placeholder="Digite o seu email" onChange={(e) => setEmail(e.target.value)} />
            </label>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default MyForm