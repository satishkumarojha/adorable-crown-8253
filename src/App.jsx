import './App.css'
import Calendar_ui from './components/Calendar/Calendar_ui'
import { Navbar} from './components/Navbar/Navbar'
import Customers from './pages/Customers'
import UserDashboard from './pages/UserDashboard'

function App() {

  return (
    <div className="App">
{/* <Navbar/> */}
<UserDashboard/>
{/* <Customers/> */}

    </div>
  )
}

export default App
