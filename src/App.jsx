import { useState } from 'react'
import './App.css'
import { Navbar} from './components/Navbar/Navbar'
import {Home} from './pages/Home'
import { MainRoutes } from './pages/MainRoutes'
import UserDashboard from './pages/UserDashboard'
import { Dashboard } from './components/User Dashboard/Dashboard'
import {Navbar as UserNavbar} from './components/User Dashboard/UserNavbar'
import Footer from './components/Footer/Footer'
function App() {
  const[log,setLog]= useState(false);
  const handleLog=()=>{
    setLog(!log);
  }
  return (
    <div className="App">
   {log?<UserNavbar handleLog={handleLog}/>:<Navbar handleLog={handleLog}/>}
   {log?<Dashboard/>:null}
   <MainRoutes/>

   {!log?<Footer/>:null}
   
    </div>
  )
}

export default App
