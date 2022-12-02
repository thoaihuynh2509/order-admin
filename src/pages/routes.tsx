import { lazy } from 'react';
import { RouteParams } from 'types/order';

export const RoutesConfig: RouteParams[] = [
  {
    path: '/',
    pageTitle: 'Order Management',
    exact: true,
    component: lazy(() => import('./order')),
  },
];
