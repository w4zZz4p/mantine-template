import { useDisclosure } from '@mantine/hooks';
import { AppShellView } from '@app/components/app-shell/views';

export const AppShell = (props) => {
    const [opened, { toggle: onToggle }] = useDisclosure();

    return <AppShellView opened={opened} onToggle={onToggle} {...props} />;
};
