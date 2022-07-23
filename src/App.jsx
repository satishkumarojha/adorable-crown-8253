import './App.css'
import Calendar2 from './components/Calendar/Calendar2'
// import Calendar_ui from './components/Calendar/Calendar_ui'
import { Navbar} from './components/Navbar/Navbar'
 
import {Home} from './pages/Home'
import  Login  from './pages/Login'
import Password from './pages/Password'
import UserDashboard from './pages/UserDashboard'
import Footer from './components/Footer/Footer';
function App() {

  return (
    <div className="App">
{/* <UserDashboard/> */}
   <Navbar/>
   <Home/>
   <Footer/>
   {/* <Login/> */}
   {/* <Password/> */}
   {/* <Calendar2/> */}
    </div>
  )
}

export default App
