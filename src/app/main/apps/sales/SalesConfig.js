import { authRoles } from 'app/auth';
import SalesHead from './SalesHead';


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
			component: SalesHead
		}
		
	]
}

export default SalesConfig;