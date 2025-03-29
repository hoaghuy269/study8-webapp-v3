import type { ReactNode } from 'react';

import { Navigate } from 'react-router-dom';

const isAuthenticated = () => !!localStorage.getItem('token');

interface PrivateRouteProps {
    children: ReactNode;
}

export function PrivateRoute({ children }: PrivateRouteProps) {
    return isAuthenticated() ? children : <Navigate to="/sign-in" replace />;
}
