import MyComponent from "./MyComponent"

alert("Teste")

const FirstComponent = () => {
    return (
        <div>
           <h2>Meu primeiro componente!</h2>
           <MyComponent/>
        </div>
    )
}

export default FirstComponent