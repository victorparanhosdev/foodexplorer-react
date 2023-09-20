import { AuthRoutes } from "./auth.routes"
import { AppRoutes } from "./app.routes"
import { BrowserRouter} from "react-router-dom"

export function Routes(){
    return(
        <BrowserRouter>
        <AuthRoutes />
        </BrowserRouter>
    )
}