import { AppShell as AppShellM, Burger, Button, Group } from '@mantine/core';
import logo from '@public/vite.svg';
import styles from './styles.module.css';

export const AppShellView = ({ opened, onToggle, onLogout, children }) => (
    <AppShellM
        header={{ height: 60 }}
        navbar={{ width: 200, breakpoint: 'sm', collapsed: { mobile: !opened } }}
        padding="md"
    >
        <AppShellM.Header>
            <Group h="100%" px="md">
                <Burger opened={opened} onClick={onToggle} hiddenFrom="sm" size="sm" />
                <img src={logo} alt="Logo" />
                <Button onClick={onLogout} className={styles.logout}>
                    Logout
                </Button>
            </Group>
        </AppShellM.Header>

        <AppShellM.Navbar p="md">Navbar</AppShellM.Navbar>

        <AppShellM.Main>{children}</AppShellM.Main>
    </AppShellM>
);
