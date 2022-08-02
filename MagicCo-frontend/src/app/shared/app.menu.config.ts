import { MenuRootItem } from 'ontimize-web-ngx';

export const MENU_CONFIG: MenuRootItem[] = [
  { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
  { id: 'services', name: 'SERVICES', icon: 'home', route: '/main/services' },
  { id: 'shops', name: 'SHOPS', icon: 'roofing', route: '/main/shops' },
  { id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' },

];
