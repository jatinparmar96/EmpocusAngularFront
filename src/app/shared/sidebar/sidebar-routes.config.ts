import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [

  {
    path: '', title: 'Master Data', icon: 'ft-trending-up', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
      {
        path: '/setupCompany', title: 'Create Company', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
      },
      {
        path: '/dashboard/charts-of-accounts', title: 'Chart Of Accounts', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
      },
      {
        path: '/dashboard/unit-of-measurement', title: 'Unit of Measurement', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
      },
      {
        path: '/dashboard/raw-product', title: 'Product', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
      },

      {
        path: '/dashboard/charges-master', title: 'Charges Master', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
      },
      {
        path: '/dashboard/branch-master', title: 'Branch Master', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
      },
      {
        path: '/dashboard/bank-master', title: 'Bank Master', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
      },

      {
        path: '/dashboard/bom/new', title: 'Bill of Material', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
      },
      {
        path: '/dashboard/category', title: 'Category', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
      },
      {
        path: '/dashboard/process-type', title: 'Process Type', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
      },

    ]
  },
  {
    path: '', title: 'Inventory Master', icon: 'ft-trending-up', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
      {
        path: '/inventory-master/stock-item-master', title: 'Stock Item Master', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
      },
    ]
  },
  {
    path: '', title: 'CRM', icon: 'ft-trending-up', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
      {
        path: '/crm/lead', title: 'Lead', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
      },
      {
        path: '/crm/deal', title: 'Deal', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
      },
      {
        path: '/crm/account', title: 'Account', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
      },
      {
        path: '/crm/quotation', title: 'Quotation', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
      },
      {
        path: '/crm/billing', title: 'Billing', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
      },
    ]
  },
  {
    path: '', title: 'Employee', icon: 'ft-user', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
      {
        path: '/employee/create', title: 'Add Employee', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
      }
    ]


  }


];
