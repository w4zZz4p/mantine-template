import { Navigate } from 'react-router-dom';
import { useAuth } from '@app/hooks/use-auth';

export const withLogin = (Component) => (props) => {
    const { isLoggedIn } = useAuth();

    if (!isLoggedIn) return <Navigate to="/login" replace />;

    return <Component {...props} />;
};
