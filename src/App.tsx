import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles.scss';
import Sidebar from './Sidebar';
import Choose from './Choose';
import Learn from './Learn';

export default function App() {
	return (
		<Router>
			{/* FLEX WRAPPER */}
			<div className="wrapper">
				<Sidebar />
				<Switch>
					<Route path="/choose">
						<Choose />
					</Route>
					<Route path="/learn">
						<Learn />
					</Route>
					<Route path="/drag">
						<Choose />
					</Route>
					<Route path="/write">
						<Choose />
					</Route>
					<Route path="/">
						<Choose />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}
