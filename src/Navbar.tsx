import { Link } from 'react-router-dom';

function NavbarItem({ to, children }: { to: string; children: string }) {
	return <Link to={to}>{children}</Link>;
}

export default function Navbar() {
	return (
		<ul className="Navbar">
			<NavbarItem to="/choose">Välj dina verb</NavbarItem>
			<NavbarItem to="/learn">Lär dig verbformerna</NavbarItem>
			<NavbarItem to="/exercise">Välj rätt verb</NavbarItem>
			<NavbarItem to="/exercise2">Skriv verben</NavbarItem>
		</ul>
	);
}
