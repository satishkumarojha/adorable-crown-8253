import React from 'react'
import Navbar from '../components/UserNavbar'
import { Text } from '@chakra-ui/react/'
import Dashboard from '../components/Dashboard'
import UserRoutes from './UserRoutes'
import Home from '../components/UserHome'
import UserNavRoutes from './UserNavRoutes'
const UserDashboard = () => {
  return (
    <div>
        <Navbar/>
        <Dashboard/>
        <UserRoutes/>
    {/* <UserNavRoutes/> */}
    </div>
  )
}

export default UserDashboard