import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Calendar2 from '../components/Calendar/Calendar2';
import Customers from './Customers';
import { Home } from './Home';
import {Home as UserHome} from '../components/User Dashboard/UserHome';
import Individuals from './Indiviuals';
import UserDashboard from './UserDashboard';
import EventTypes from '../components/User Dashboard/EventTypes';
import ScheduledEvents from '../components/User Dashboard/ScheduledEvents';
import RoutingForms from '../components/User Dashboard/RoutingForms';
import Workflows from '../components/User Dashboard/Workflows';
import EventForm from '../components/User Dashboard/EventForm';
import Availablity from '../components/User Dashboard/UserAvailablity';
import Teams from "../pages/Teams"
export const MainRoutes = () => {
  return (
    <div>
   <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/individuals' element={<Individuals/>}/>
     <Route path='/teams' element={<Teams/>}/>
     <Route path='/customer' element={<Customers/>}/>
     <Route path='/userevent/userhome' element={<UserHome/>}/>
     <Route path='/userevent/userhome/eventtype' element={<EventTypes/>}/>
     <Route path='/userevent/userhome/scheduledevents' element={<ScheduledEvents/>}/>
     <Route path='/userevent/userhome/routingforms' element={<RoutingForms/>}/>
     <Route path='/userevent/userhome/workflows' element={<Workflows/>}/>
     <Route path='/userevent/userhome/eventforms' element={<EventForm/>}/>
     <Route path='/userevent/userhome/availability' element={<Calendar2/>}/>
     {/* <Route path='/userevent/availablity/calender' element={<Calendar2/>}/> */}
   </Routes>    
    </div>
  )
}
