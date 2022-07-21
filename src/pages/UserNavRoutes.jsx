import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Availablity from '../components/User Dashboard/UserAvailablity';
import Home from '../components/User Dashboard/UserHome';
import UserRoutes from './UserRoutes';
const UserNavRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}>
             
            </Route>
            

        {/* <Route path=":event_types" element={<EventTypes />} />
        <Route path=":/scheduled_events" element={<ScheduledEvents />} />
        <Route path=":/workflows" element={<Workflows />} />
        <Route path=":/routing_forms" element={<RoutingForms />} /> */}
      
            
            <Route path='/avaliablity' element={<Availablity/>}/>

        </Routes>
    </div>
  )
}

export default UserNavRoutes