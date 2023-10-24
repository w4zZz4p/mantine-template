import {
    Alert,
    Button,
    Card,
    Container,
    Divider,
    LoadingOverlay,
    PasswordInput,
    Stack,
    TextInput,
} from '@mantine/core';
import { IconAt, IconBrandGoogle, IconInfoCircle, IconLogin, IconPassword } from '@tabler/icons-react';
import styles from './styles.module.css';

const errors = {
    400: `We experienced a negative success while trying to login`,
};

export const LoginPageView = ({ isLoading, errorCode, form, authProviders, onSubmit, onProvider }) => (
    <Container className={styles.container}>
        <Card withBorder shadow="lg" className={styles.card} pos="relative">
            <LoadingOverlay visible={isLoading} overlayProps={{ blur: 2 }} />
            <form onSubmit={form.onSubmit(onSubmit)}>
                <Stack>
                    {errorCode && (
                        <Alert variant="light" color="red" title="Error" icon={<IconInfoCircle />}>
                            {errors[errorCode] || `Oops something went wrong`}
                        </Alert>
                    )}

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
                    {authProviders && (
                        <>
                            <Divider my="xs" label="Or" labelPosition="center" />
                            {authProviders?.map((provider) => (
                                <Button
                                    key={provider.name}
                                    rightSection={<IconBrandGoogle />}
                                    onClick={() => {
                                        onProvider(provider);
                                    }}
                                >
                                    Login with {provider.name}
                                </Button>
                            ))}
                        </>
                    )}
                </Stack>
            </form>
        </Card>
    </Container>
);
