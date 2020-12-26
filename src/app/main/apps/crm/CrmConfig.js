import { authRoles } from 'app/auth';
import Crm from './Crm'


const CrmConfig = {
    settings: {
		layout: {
			config: {}
        }
	},
	auth: authRoles.onlyGuest,
	routes: [
		{
			path: '/crm',
			component: Crm
		}
	]
}

export default CrmConfig;