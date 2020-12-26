import { authRoles } from 'app/auth';
import SalesReports from './SalesReports'

const SalesReportsConfig = {
    settings: {
		layout: {
			config: {}
        }
	},
	auth: authRoles.onlyGuest,
	routes: [
		{
			path: '/Salesreports',
			component: SalesReports
		}
	]
}

export default SalesReportsConfig;