import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles.scss';
import Sidebar from './Sidebar';
import Choose from './Choose';

export default function App() {
	return (
		<Router>
			<Sidebar />
			<Switch>
				<Route path="/">
					<Choose />
				</Route>
			</Switch>
		</Router>
	);
}
