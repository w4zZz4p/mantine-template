import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MantineProvider } from '@mantine/core';
import { AuthProvider } from '@app/providers/auth';
import { withLogin } from '@app/hoc/with-login';
import { withAppShell } from '@app/hoc/with-app-shell';
import { HomePage } from '@app/pages/home';
import { LoginPage } from '@app/pages/login';
import '@mantine/core/styles.css';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
});

const router = createBrowserRouter([
    {
        path: '/',
        Component: withLogin(withAppShell(HomePage)),
    },
    {
        path: '/login',
        Component: LoginPage,
    },
]);

export const App = () => (
    <MantineProvider>
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <RouterProvider router={router} />
            </AuthProvider>
        </QueryClientProvider>
    </MantineProvider>
);
