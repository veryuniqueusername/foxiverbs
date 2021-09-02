import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles.scss';
import Sidebar from './Sidebar';
import Choose from './Choose';

export default function App() {
	return (
		<Router>
			<div className="wrapper">
				<Sidebar />
				<Switch>
					<Route path="/">
						<Choose />
					</Route>
					<Route path="/learn">
						<Choose />
					</Route>
					<Route path="/drag">
						<Choose />
					</Route>
					<Route path="/write">
						<Choose />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}
