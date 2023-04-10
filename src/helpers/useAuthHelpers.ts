import { useAuth } from 'react-oidc-context';
import { SigninRedirectArgs } from 'oidc-client-ts';

export const useAuthHelpers = () => {
	const auth = useAuth();
	const signinRedirectArgs: SigninRedirectArgs = {
		redirect_uri: typeof window !== 'undefined' ? location.href : '',
	};

	const handleSignIn = async () => {
		await auth.signinRedirect(signinRedirectArgs);
	};
	const handleSignOut = async () => {
		await auth.signoutRedirect();
	};

	return {
		handleSignIn,
		handleSignOut,
		isAuthenticated: auth.isAuthenticated,
		isLoading: auth.isLoading,
		user: auth.user,
	};
};
