'use client';

import { useAuthHelpers } from 'src/helpers/useAuthHelpers';

const Navbar = () => {
	const { handleSignIn, isAuthenticated } = useAuthHelpers();
	return (
		<nav>
			<div>
				<ul>
					{isAuthenticated ? (
						<li>User</li>
					) : (
						<li>
							<a onClick={handleSignIn}>Login</a>
						</li>
					)}
					<li>Documentation</li>
					<li>Source Code</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
