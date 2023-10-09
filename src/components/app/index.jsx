import { LoginPage } from '@app/pages/login';
import { MantineProvider } from '@mantine/core';
// import { withAppShell } from '@app/hoc/with-app-shell';
// import { Home } from '@app/pages/home';
import '@mantine/core/styles.css';

// const HomePage = withAppShell(Home);

export const App = () => (
    <MantineProvider>
        {/* <HomePage /> */}
        <LoginPage />
    </MantineProvider>
);
