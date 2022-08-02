import { MenuRootItem } from 'ontimize-web-ngx';

export const MENU_CONFIG: MenuRootItem[] = [
  { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
  { id: 'services', name: 'SERVICES', icon: 'electric_bolt', route: '/main/services' },
  { id: 'settings', name: 'SETTINGS', icon: 'electric_bolt', route: '/main/settings' },
  { id: 'subscriptions', name: 'SUBSCRIPTIONS', icon: 'home', route: '/main/subscriptions' },
  { id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' },

];
