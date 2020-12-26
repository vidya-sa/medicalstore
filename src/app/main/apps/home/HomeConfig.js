import { authRoles } from 'app/auth';
import Home from './Home';



const HomeConfig = {
	settings: {
		layout: {
			config: {
				navbar: {
					display: true
				},
				toolbar: {
					display: true
				},
				footer: {
					display: true
				},
				leftSidePanel: {
					display: true
				},
				rightSidePanel: {
					display: true
				}
			}
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