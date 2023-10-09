import { AppShell } from '@app/components/app-shell';

export const withAppShell = (Component) => (props) => (
    <AppShell>
        <Component {...props} />
    </AppShell>
);
