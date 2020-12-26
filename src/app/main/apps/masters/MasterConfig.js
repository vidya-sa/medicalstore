import { authRoles } from 'app/auth';
import MasterHead from './MasterHead';

const MasterConfig = {
    settings: {
		layout: {
			config: {}
        }
	},
	auth: authRoles.onlyGuest,
	routes: [
		{
			path: '/masters',
			component: MasterHead
		}
	]
}

export default MasterConfig;