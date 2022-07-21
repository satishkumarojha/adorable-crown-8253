import './App.css'
import { Navbar} from './components/Navbar/Navbar'
import UserDashboard from './pages/UserDashboard'
import Customers from './pages/Customers'
function App() {

  return (
    <div className="App">
{/* <UserDashboard/> */}
<Navbar/>
<Customers/>
    </div>
  )
}

export default App
