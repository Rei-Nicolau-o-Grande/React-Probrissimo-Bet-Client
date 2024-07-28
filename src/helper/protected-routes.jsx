import { Outlet, Navigate } from 'react-router-dom';
import { useCookies } from "react-cookie";
import { jwtDecode } from "jwt-decode";


const ProtectedRoutes = ({ allowedRoles }) => {
    const [cookies] = useCookies(['accessToken']);
    const token = cookies.accessToken;

    if (!token) {
        return <Navigate to="/" />;
    }

    const decodedToken = jwtDecode(token);
    const userRoles = decodedToken.roles || [];

    const hasRequiredRole = allowedRoles.some(role => userRoles.includes(role));

    if (!hasRequiredRole) {
        return <Navigate to="/" />;
    }

    return <Outlet />;
};

export default ProtectedRoutes;