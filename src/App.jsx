import './App.css'
import { Navbar} from './components/Navbar/Navbar'
import {Home} from './pages/Home'
import UserDashboard from './pages/UserDashboard'
function App() {

  return (
    <div className="App">
{/* <UserDashboard/> */}
   <Navbar/>
   <Home/>
    </div>
  )
}

export default App
