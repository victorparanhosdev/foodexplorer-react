import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { Details } from "../pages/Details"
import { NewDish } from "../pages/NewDish"
import { EditDish } from "../pages/EditDish"
import { useAuth } from "../hooks/auth"
export function AppRoutes(){

    const {user} = useAuth()
    
    return(
        
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/details" element={<Details/>}/>
            <Route path="/newdish" element={<NewDish/>} />
            <Route path="/editdish" element={<EditDish/>} />
        </Routes>

    )
}
