import './App.css'
import Calendar_ui from './components/Calendar/Calendar_ui'
import { Navbar} from './components/Navbar/Navbar'
 
import {Home} from './pages/Home'
import  Login  from './pages/Login'
import Password from './pages/Password'
import UserDashboard from './pages/UserDashboard'
function App() {

  return (
    <div className="App">
{/* <UserDashboard/> */}
   <Navbar/>
   {/* <Home/> */}
   {/* <Login/> */}
   {/* <Password/> */}
    </div>
  )
}

export default App
