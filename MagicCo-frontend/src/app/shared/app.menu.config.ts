import { MenuRootItem } from 'ontimize-web-ngx';

export const MENU_CONFIG: MenuRootItem[] = [
  { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
  { id: 'services', name: 'SERVICES', icon: 'home', route: '/main/services' },
  { id: 'subscriptions', name: 'SUBSCRIPTIONS', icon: 'home', route: '/main/subscriptions' },
  { id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' },

];
