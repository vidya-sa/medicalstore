import React from 'react';
import { Redirect } from 'react-router-dom';
import FuseUtils from '@fuse/utils';
import pagesConfigs from 'app/main/pages/pagesConfigs';
import RecordConfig from 'app/main/apps/record/RecordConfig';
import LoginConfig from 'app/main/login/LoginConfig';
import RegisterConfig from  'app/main/register/RegisterConfig';
import HomeConfig from 'app/main/apps/home/HomeConfig';
import SalesConfig from 'app/main/apps/sales/SalesConfig'
import MasterConfig from 'app/main/apps/masters/MasterConfig';
import CrmConfig from 'app/main/apps/crm/CrmConfig';
import FinanceConfig from 'app/main/apps/finance/FinanceConfig';
import SalesReportsConfig from 'app/main/apps/Salesreports/SalesReportConfig';

const routeConfigs = [
	...pagesConfigs,
	RecordConfig,
	LoginConfig,
	RegisterConfig,
	HomeConfig,
	SalesConfig,
	MasterConfig,
	CrmConfig,
	FinanceConfig,
	SalesReportsConfig
   ];

const routes = [
	...FuseUtils.generateRoutesFromConfigs(routeConfigs),
	{
		path: '/',
		component: () => <Redirect to="/login" />
	}
];

export default routes;
