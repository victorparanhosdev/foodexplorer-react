import { Route, Routes, Navigate } from "react-router-dom";
import { Home } from "../pages/Home";
import { Details } from "../pages/Details";
import { NewDish } from "../pages/NewDish";
import { EditDish } from "../pages/EditDish";
import { ErrorElement } from "../pages/ErrorElement";
import { useAuth } from "../hooks/auth";

export function AppRoutes() {
    const { user } = useAuth();

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/newdish" element={user && user.isAdmin ? <NewDish /> : <Navigate to="/error401" />} />
            <Route path="/editdish/:id" element={user && user.isAdmin ? <EditDish /> : <Navigate to="/error401" />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/error401" element={<ErrorElement />} />
        </Routes>
    );
}
