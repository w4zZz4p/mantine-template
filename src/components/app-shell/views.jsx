import { AppShell as AppShellM, Burger, Group } from '@mantine/core';
import logo from '@public/vite.svg';

export const AppShellView = ({ opened, onToggle, children }) => (
    <AppShellM
        header={{ height: 60 }}
        navbar={{ width: 200, breakpoint: 'sm', collapsed: { mobile: !opened } }}
        padding="md"
    >
        <AppShellM.Header>
            <Group h="100%" px="md">
                <Burger opened={opened} onClick={onToggle} hiddenFrom="sm" size="sm" />
                <img src={logo} alt="Logo" />
            </Group>
        </AppShellM.Header>

        <AppShellM.Navbar p="md">Navbar</AppShellM.Navbar>

        <AppShellM.Main>{children}</AppShellM.Main>
    </AppShellM>
);
