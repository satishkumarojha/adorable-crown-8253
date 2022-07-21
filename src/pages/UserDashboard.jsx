import React from 'react'
import Navbar from '../components/User Dashboard/UserNavbar'
import { Text } from '@chakra-ui/react/'
import Dashboard from '../components/User Dashboard/Dashboard'
import UserRoutes from './UserRoutes'
import Home from '../components/User Dashboard/UserHome'
import UserNavRoutes from './UserNavRoutes'
import EventForm from '../components/User Dashboard/EventForm'
const UserDashboard = () => {
  return (
    <div>
        <Navbar/>
        {/* <Dashboard/> */}
        {/* <UserRoutes/> */}
    {/* <UserNavRoutes/> */}
    <EventForm />
    </div>
  )
}

export default UserDashboard