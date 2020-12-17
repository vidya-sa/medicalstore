import React from 'react';
import { Redirect } from 'react-router-dom';
import FuseUtils from '@fuse/utils';
import pagesConfigs from 'app/main/pages/pagesConfigs';
import ExampleConfig from 'app/main/apps/example/ExampleConfig';
import LoginConfig from 'app/main/login/LoginConfig';
import RegisterConfig from  'app/main/register/RegisterConfig';
import HomeConfig from 'app/main/apps/home/HomeConfig';
import SalesConfig from 'app/main/apps/sales/SalesConfig';



const routeConfigs = [
	...pagesConfigs,
	ExampleConfig,
	LoginConfig,
	RegisterConfig,
	HomeConfig,
	SalesConfig

   ];

const routes = [
	...FuseUtils.generateRoutesFromConfigs(routeConfigs),
	{
		path: '/',
		component: () => <Redirect to="/login" />
	}
];

export default routes;
