import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

export default function Routes() {
  return (
    <Switch>
      <Route path="" exact component={} />
      <Route path="" component={} />
      <Route path="" component={} />
    </Switch>
  );
}
