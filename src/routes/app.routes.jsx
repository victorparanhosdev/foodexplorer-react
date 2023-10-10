import { Route, Routes, Navigate } from "react-router-dom";
import { Home } from "../pages/Home";
import { Details } from "../pages/Details";
import { NewDish } from "../pages/NewDish";
import { EditDish } from "../pages/EditDish";
import { useAuth } from "../hooks/auth";
import { Favorites } from "../pages/Favorites";
import { Requests } from "../pages/Requests";
export function AppRoutes() {
    const { user } = useAuth();

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/newdish" element={user && user.isAdmin ? <NewDish /> : <Navigate to="/" />} />
            <Route path="/editdish/:id" element={user && user.isAdmin ? <EditDish /> : <Navigate to="/" />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/favorites" element={user && !user.isAdmin ? <Favorites /> : <Navigate to="/" />}/>
            <Route path="/requests" element={user && !user.isAdmin ? <Requests /> : <Navigate to="/" />}/>
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
}
