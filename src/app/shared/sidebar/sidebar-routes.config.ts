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
                path: 'add-uom', title: 'Unit of Measurement', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: 'raw-products', title: 'Raw Products', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: 'finished-product', title: 'Finished Products', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: 'charges-master', title: 'Charges Master', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: 'branch-master', title: 'Branch Master', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: 'bank-master', title: 'Bank Master', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: 'godown-master', title: 'Godown Master', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            {
                path: 'bill-of-material', title: 'Bill of Material', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
            },
            
        ]
    },
   
];
