import { useState } from "react"

const App = () => {
  const[name,setName]=useState('')
  const handleChange=(e)=>{
    setName({...name,[e.target.name]:e.target.value})
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(name);
  }
  return (
    <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Enter your name" onChange={handleChange}  />
    </form>
  )
}

export default App