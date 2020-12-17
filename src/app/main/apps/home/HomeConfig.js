import { authRoles } from 'app/auth';
import Home from './Home';



const HomeConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	auth: authRoles.onlyGuest,
	routes: [
		{
			path: '/home',
			component: Home
		}
	]
};

export default HomeConfig;