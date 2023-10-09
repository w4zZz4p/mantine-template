import { Button, Card, Container, PasswordInput, Stack, TextInput } from '@mantine/core';
import { IconAt, IconLogin, IconPassword } from '@tabler/icons-react';
import styles from './styles.module.css';

export const LoginPageView = ({ form, onSubmit }) => (
    <Container className={styles.container}>
        <Card withBorder shadow="lg" className={styles.card}>
            <form onSubmit={form.onSubmit(onSubmit)}>
                <Stack>
                    <TextInput
                        leftSection={<IconAt />}
                        label="Identity"
                        placeholder="Username or email"
                        {...form.getInputProps('identity')}
                    />
                    <PasswordInput
                        leftSection={<IconPassword />}
                        label="Password"
                        placeholder="User password"
                        {...form.getInputProps('password')}
                    />
                    <Button rightSection={<IconLogin />} type="submit">
                        Login
                    </Button>
                </Stack>
            </form>
        </Card>
    </Container>
);
