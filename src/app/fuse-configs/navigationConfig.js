import i18next from 'i18next';
import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';
i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);


const navigationConfig = [
	{
		id: 'applications',
		title: 'Applications',
		translate: 'APPLICATIONS',
		type: 'group',
		icon: 'apps',
		children: [
			{
				id: 'home-component',
				title: 'Home',
				translate: 'Home',
				type: 'item',
				icon: 'whatshot',
				url: '/home'
			},
			{
				id: 'sale-component',
				title: 'Sales',
				translate: 'Sales',
				type: 'item',
				icon: 'whatshot',
				url: '/sales'
			},
			{
				id: 'sale-component',
				title: 'Sales',
				translate: 'Sales-reports',
				type: 'item',
				icon: 'whatshot',
				url: '/Salesreports'
			},

			{
				id: 'record-component',
				title: 'Record',
				translate: 'Record',
				type: 'item',
				icon: 'whatshot',
				url: '/record'
			},
			{
				id: 'masters-component',
				title: 'Masters',
				translate: 'Masters',
				type: 'item',
				icon: 'whatshot',
				url: '/masters'
			},
			{
				id: 'finance-component',
				title: 'Finance',
				translate: 'Finance',
				type: 'item',
				icon: 'whatshot',
				url: '/finance'
			},
			{
				id: 'crm-component',
				title: 'Crm',
				translate: 'Crm',
				type: 'item',
				icon: 'whatshot',
				url: '/crm'
			},
			
			
			
		]
	}
];

export default navigationConfig;
