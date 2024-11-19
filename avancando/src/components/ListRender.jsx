import {useState} from "react";

const ListRender = () => {
    const [list] = useState(["Matheus", "Pedro", "Josias"])

    const [users, setUsers] = useState([
      {id: 1, name: "Matheus", age: 22},
      {id: 2, name: "Pedro", age: 20},
      {id: 3, name: "Josias", age: 19}
    ])

    //  6 previous
    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers) => 
        prevUsers.filter((user) => randomNumber !== user.id)
    );
    }
  return (
    <div>
        {/* Render sem key */}
        <ul>
            {list.map((item) => (
                <li>{item}</li>
            ))}
        </ul>
        {/* Render com key */}
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    {user.name} - {user.age} anos
                </li>
            ))}
        </ul>
        {/* 6 previous */}
        <button onClick={deleteRandom}>Deletar random user</button>
    </div>
  )
}

export default ListRender