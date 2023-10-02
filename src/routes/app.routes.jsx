import { Route, Routes, Navigate } from "react-router-dom";
import { Home } from "../pages/Home";
import { Details } from "../pages/Details";
import { NewDish } from "../pages/NewDish";
import { EditDish } from "../pages/EditDish";
import { useAuth } from "../hooks/auth";

export function AppRoutes() {
    const { user } = useAuth();

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/newdish" element={user && user.isAdmin ? <NewDish /> : <Navigate to="/" />} />
            <Route path="/editdish/:id" element={user && user.isAdmin ? <EditDish /> : <Navigate to="/" />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
}
