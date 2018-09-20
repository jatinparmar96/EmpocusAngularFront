import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [

    {
        path: '', title: 'Master Data', icon: 'ft-trending-up', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
            {
                path: '/setupCompany', title: 'Create Company', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: 'chart-of-accounts', title: 'Chart Of Accounts', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: 'add-uom', title: 'Add Unit of Measurement', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: 'add-products', title: 'Enter Products', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
          

        ]
    },
    
    
   
];
