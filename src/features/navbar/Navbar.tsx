interface NavbarProps { }

const Navbar: React.FC<NavbarProps> = ({ }) => {
	return (
		<nav>
			<div>
				<ul>
					<li>Login</li>
					<li>Documentation</li>
					<li>Source Code</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
