import Providers from '../features/providers/Providers';
import Navbar from '../features/navbar/Navbar';
import Footer from '../features/footer/Footer';
import '../styles/global.css';

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<html lang="en">
			<body>
				<Providers>
					<Navbar />
					{children}
					<Footer />
				</Providers>
			</body>
		</html>
	);
};

export default Layout;
