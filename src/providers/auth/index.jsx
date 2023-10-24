import { useEffect, useMemo, useState } from 'react';
import { pb } from '@app/lib/pocketbase';
import { AuthContext } from './context';

const handleLogout = () => {
    pb.authStore.clear();
};

export const AuthProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(pb.authStore.isValid);

    const handleAuthStoreChange = (token, model) => {
        console.log(model);
        setIsLoggedIn(pb.authStore.isValid);
    };

    useEffect(() => pb.authStore.onChange(handleAuthStoreChange), []);

    const value = useMemo(
        () => ({
            isLoggedIn,
            logout: handleLogout,
        }),
        [isLoggedIn],
    );

    return <AuthContext.Provider {...props} value={value} />;
};
