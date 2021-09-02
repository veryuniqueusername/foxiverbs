import { NavLink as Link } from 'react-router-dom';

export default function Sidebar() {
	return (
		<ul className="Sidebar">
			<Link to="/choose">
				<div className="number">
					<p>1</p>
				</div>
				<div>
					<h1>Välj dina oregelbundna engelska verb</h1>
					<p>Skapa din personliga lista med verben som du vill arbeta med.</p>
				</div>
			</Link>
			<Link to="/learn">
				<div className="number">
					<p>2</p>
				</div>
				<div>
					<h1>Ta tema på verben</h1>
					<p>
						Alla dina valda verb visas en efter en för att du ska lära dig dem
						bättre.
					</p>
				</div>
			</Link>
			<Link to="/drag">
				<div className="number">
					<p>3</p>
				</div>
				<div>
					<h1>Övning - Välj verben</h1>
					<p>Öva genom att sätta verben på rätt plats.</p>
				</div>
			</Link>
			<Link to="/write">
				<div className="number">
					<p>4</p>
				</div>
				<div>
					<h1>Övning - Skriv verben</h1>
					<p>Öva genom att skriva verben.</p>
				</div>
			</Link>
		</ul>
	);
}
