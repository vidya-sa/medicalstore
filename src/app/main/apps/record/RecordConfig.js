import { authRoles } from 'app/auth';
import PurchaseHeadRecord from './PurchaseHeadRecord';

const RecordConfig = {
    settings: {
		layout: {
			config: {}
        }
	},
	auth: authRoles.onlyGuest,
	routes: [
		{
			path: '/record',
			component: PurchaseHeadRecord
		}
	]
}

export default  RecordConfig;