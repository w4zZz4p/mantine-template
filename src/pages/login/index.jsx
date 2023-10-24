import { Navigate, useSearchParams } from 'react-router-dom';
import { useForm } from '@mantine/form';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useAuth } from '@app/hooks/use-auth';
import { LoginPageView } from '@app/pages/login/views';
import { pb } from '@app/lib/pocketbase';
import { useLocalStorage } from '@mantine/hooks';
import { useEffect, useState } from 'react';

export const LoginPage = () => {
    const redirectUrl = window.location.href.replace(window.location.search, '');
    const { isLoggedIn } = useAuth();
    const [errorCode, setErrorCode] = useState();
    const [searchParams] = useSearchParams();

    const [savedProvider, setSavedProvider] = useLocalStorage({
        key: 'provider',
    });

    const form = useForm({
        initialValues: {
            identity: '',
            password: '',
        },
    });

    const { data, isFetching: isFetchingListAuthMethods } = useQuery({
        queryKey: ['listAuthMethods'],
        queryFn: () => pb.collection('users').listAuthMethods(),
        enabled: searchParams.size === 0 || !!errorCode,
    });

    const {
        isPending: isPendingAuthWithPassword,
        error: errorAuthWithPassword,
        mutate: authWithPassword,
    } = useMutation({
        mutationFn: ({ identity, password }) => pb.collection('users').authWithPassword(identity, password),
    });

    const {
        isPending: isPendingAuthWithOAuth2Code,
        error: errorAuthWithOAuth2Code,
        mutate: authWithOAuth2Code,
    } = useMutation({
        mutationFn: ({ name, code, codeVerifier }) =>
            pb.collection('users').authWithOAuth2Code(name, code, codeVerifier, redirectUrl, {
                emailVisibility: false,
            }),
    });

    useEffect(() => {
        if (!savedProvider) return;
        if (!searchParams.size) return;

        if (searchParams.get('state') !== savedProvider.state) {
            setErrorCode(500);
        } else if (searchParams.get('code')) {
            authWithOAuth2Code({
                name: savedProvider.name,
                code: searchParams.get('code'),
                codeVerifier: savedProvider.codeVerifier,
            });
        }
    }, [savedProvider]);

    const handleSubmit = (values) => {
        authWithPassword(values);
    };

    const handleProvider = (provider) => {
        setSavedProvider(provider);
        window.location.href = provider.authUrl + redirectUrl;
    };

    if (isLoggedIn) return <Navigate to="/" replace />;

    return (
        <LoginPageView
            isLoading={isPendingAuthWithPassword || isFetchingListAuthMethods || isPendingAuthWithOAuth2Code}
            errorCode={errorAuthWithPassword?.status || errorAuthWithOAuth2Code?.status || errorCode}
            form={form}
            authProviders={data?.authProviders}
            onSubmit={handleSubmit}
            onProvider={handleProvider}
        />
    );
};
