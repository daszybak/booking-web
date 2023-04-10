"use client";
import { PropsWithChildren } from 'react';
import { AuthProvider, AuthProviderProps } from 'react-oidc-context';
import { User } from 'oidc-client-ts';
import { isBrowser } from 'src/helpers/isBrowser';

const oidcConfig: AuthProviderProps = {
    authority: process.env.OIDC_AUTHORITY!,
    client_id: process.env.OIDC_CLIENT_ID!,
    redirect_uri: isBrowser ? `${location.origin}` : '',
    response_type: process.env.OIDC_RESPONSE_TYPE,
    post_logout_redirect_uri: isBrowser ? `${location.origin}` : '',
    redirectMethod: 'replace',
    onSigninCallback: (_user: User | void) => {
        const path = location.pathname + location.search.split(/&state=|\?state=/g)[0];
        window.history.replaceState({}, document.title, path);
    },
};

const Providers: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <AuthProvider {...oidcConfig}>
            {children}
        </AuthProvider>
    )
}

export default Providers