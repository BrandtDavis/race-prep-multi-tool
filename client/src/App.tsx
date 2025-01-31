import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  
  const [data, setData] = useState('')

  const fetchApi = async () => {
    const response = await axios.get('http://localhost:5000/hello')
    console.log(response.data)
    setData(response.data.user)
  }

  useEffect(() => {
    fetchApi()
  }, [])

  return (
    <>
      <div>
      <p>
       Data: {data}
      </p>
      </div>
    </>
  )
}

export default App
