// TemplateExpression


const TemplateExpression = () => {
    const name = "Matheus Dantas Rocha"

    const data = {
        age: 22,
        job: "Programador"
    }

  return (
    <div>
        <p>A soma e {16 + 16}</p>
        <h3>Seja bem vindo {name}</h3>
        <p>Meu nome e matheus e tenho {data.age} anos e eu sou um {data.job}!</p>
    </div>
  )
}

export default TemplateExpression