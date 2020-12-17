import { authRoles } from 'app/auth';
import Sales from './Sales'

const SalesConfig = {
    settings: {
		layout: {
			config: {}
        }
	},
	auth: authRoles.onlyGuest,
	routes: [
		{
			path: '/sales',
			component: Sales
		}
	]
}

export default SalesConfig;
