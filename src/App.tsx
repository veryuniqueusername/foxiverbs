import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles.scss';
import Navbar from './Navbar';

export default function App() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route path="/"></Route>
			</Switch>
		</Router>
	);
}
