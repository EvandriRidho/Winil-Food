import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Sidebar from './Components/Sidebar/Sidebar'
import { Routes, Route } from "react-router-dom"
import AddItem from './Pages/AddItem/AddItem'
import ListItem from './Pages/List/ListItem'
import Orders from './Pages/Orders/Orders'

const App = () => {
  return (
    <div>
      <Navbar />
      <hr />
      <div className='app-content'>
        <Sidebar />
        <Routes>
          <Route path='/add' element={<AddItem />} />
          <Route path='/list' element={<ListItem />} />
          <Route path='/orders' element={<Orders />} />
        </Routes>
      </div>
    </div>
  )
}

export default App