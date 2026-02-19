import './App.css'
import { useState } from 'react'
import UserCard from './components/UserCard' 


function App() {

  const [name, setName] = useState("Marcilio")
  const [email, setEmail] = useState("marciliogomesx14@gmail.com")
  const [age, setAge] = useState(30)
  const [users, setUsers] = useState([])


  function handleSubmit(e){
    e.preventDefault()

    

    setUsers([...users, {
      id: Date.now(),
      name,
      email,
      age
    }])


  }

  return (
    <div className='app'>
      <h1>Cadastro de usuários</h1>
    
      <form onSubmit={handleSubmit}>
        <input placeholder='Nome'
        type='text'
        value={name}
        onChange={e => setName(e.target.value)}
        />

        <input placeholder='Email'
          type='Email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input placeholder='Idade'
          type='number'
          value={age}
          onChange={e => setAge(e.target.value)}
        />

        <button type='submit'>Cadastrar</button>
      </form>

      <div className='user-list'>
        
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}


      </div>
    </div>
  )
}

export default App
