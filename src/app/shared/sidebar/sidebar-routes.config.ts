import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [

    {
        path: '', title: 'Master Data', icon: 'ft-trending-up', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
            {
                path: '/setupCompany', title: 'Create Company', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: 'chart-of-accounts', title: 'Chart Of Accounts', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            }
        ]
    },
    
    
   
];
