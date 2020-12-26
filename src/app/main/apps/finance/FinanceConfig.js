import { authRoles } from 'app/auth';
import Finance from './Finance'

const FinanceConfig = {
    settings: {
		layout: {
			config: {}
        }
	},
	auth: authRoles.onlyGuest,
	routes: [
		{
			path: '/finance',
			component: Finance
		}
	]
}

export default FinanceConfig;