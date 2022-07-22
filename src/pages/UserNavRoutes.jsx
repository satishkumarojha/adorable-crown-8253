import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Availablity from '../components/UserAvailablity';
import Home from '../components/UserHome';
import AddOne from './AddOne';
import CreateEvent from './CreateEvent';
import Indiviuals from './Indiviuals';
const UserNavRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/createtype' element={<CreateEvent/>}/>
            <Route path='/addone' element={<AddOne/>}/>
            <Route path='/indiviuals' element={<Indiviuals/>}/>
            <Route path='/avaliablity' element={<Availablity/>}/>
        </Routes>
    </div>
  )
}

export default UserNavRoutes