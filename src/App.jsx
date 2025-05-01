import React from 'react'
import InfoPage from './Pages/InfoPage'
import Navbar from './Component/Navbar'

const App = () => {
  return (
    <>
    <div className='bg-gray-800' >

    <Navbar/>
      <InfoPage/>
    </div>
    </>
  )
}

export default App
