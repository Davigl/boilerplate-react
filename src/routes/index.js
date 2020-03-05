import React from 'react';
import {
  HashRouter, Route, Switch
} from 'react-router-dom';

import NotFound from '~/pages/NotFound';

const Routes = () => (
  <HashRouter>
    <Switch>
      <Route path="*" component={NotFound} />
    </Switch>
  </HashRouter>
);

export default Routes;
