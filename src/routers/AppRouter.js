import { Routes, Route, BrowserRouter} from "react-router-dom";
import { Login } from "../pages/login/Login";
import { DashboardRoutes } from "./DashboardRoutes";

export const AppRouter = () => {
  return (
    <BrowserRouter>
        
      <Routes>
            
            <Route path="login" element={<Login/>}/>

            <Route path="/*" element={<DashboardRoutes/>} />    

      </Routes>
    </BrowserRouter>
  )
}


