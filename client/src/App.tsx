// import { useState, useEffect } from 'react'
import './App.css'
// import axios from 'axios'

function App() {
  
  // const [data, setData] = useState('')

  // const fetchApi = async () => {
  //   const response = await axios.get('http://localhost:5000/hello')
  //   console.log(response.data)
  //   setData(response.data.user)
  // }

  // useEffect(() => {
  //   fetchApi()
  // }, [])

  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
        </div>
      </div>
    </>
  )
}

export default App
