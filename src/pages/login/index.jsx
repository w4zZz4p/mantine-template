import { LoginPageView } from '@app/pages/login/views';
import { useForm } from '@mantine/form';

export const LoginPage = () => {
    const form = useForm({
        initialValues: {
            identity: '',
            password: '',
        },
    });

    const handleSubmit = (values) => {
        // eslint-disable-next-line no-console
        console.log('bbdd', values);
    };

    return <LoginPageView form={form} onSubmit={handleSubmit} />;
};
