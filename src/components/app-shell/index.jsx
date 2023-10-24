import { useDisclosure } from '@mantine/hooks';
import { useAuth } from '@app/hooks/use-auth';
import { AppShellView } from '@app/components/app-shell/views';

export const AppShell = (props) => {
    const [opened, { toggle }] = useDisclosure();
    const { logout } = useAuth();

    return <AppShellView opened={opened} onToggle={toggle} onLogout={logout} {...props} />;
};
