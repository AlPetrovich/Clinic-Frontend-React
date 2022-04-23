import { Provider } from "react-redux";
import { Routes, Route} from "react-router-dom";
import { Dentist } from '../pages/Dentist'
import { Home } from '../pages/Home'
import { Patient } from '../pages/Patient'
import { Turn } from '../pages/Turn'

export const DashboardRoutes = () => {
  return (
    <div>
 
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path="dentist"  element={<Dentist />}/>
            <Route path="patient"  element={<Patient/>}/>
            <Route path="turn"  element={<Turn/>}/>
        </Routes>
 
        
    </div>
  )
}
