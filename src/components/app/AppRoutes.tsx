import Layout from 'components/layout/layout';
import { RoutesConfig } from 'pages/routes';
import React, {Suspense} from 'react';
import {Route, Switch} from 'react-router-dom';
import { RouteParams } from 'types/order';

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <Switch>
        <>
          {RoutesConfig.map((routeTableItem: RouteParams) => {
            const {path, exact, component: Component, pageTitle, goBackPath} = routeTableItem;
            return (
              <Route key={path} path={path} exact={exact}>
                <Layout pageTitle={pageTitle} goBackPath={goBackPath}>
                  <Component  />
                </Layout>
              </Route>
            );
          })
          }
        </>
        <Route>
          <div>404 - Not Found</div>
        </Route>
      </Switch>
    </Suspense>
  );
};

export default AppRoutes;
