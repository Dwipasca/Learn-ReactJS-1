import React, {useState} from 'react'
import './App.css'
import List from './users'

function App () {
  
  const [users] = useState([
    {name:"Dwi Pasca", job:"Web developer"},
    {name:"Jane Shepard", job:"Soldier"},
    {name:"Liara T'Soni", job:"Researcher"},
    {name:"Grunt", job:"Guardian"},
  ])
  
  return (
    <div className="app">
      
      {users.map(user => (
        <List name={user.name} job={user.job}/>
      ))}
    
    </div>
  )
}

export default App