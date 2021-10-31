import React, { Suspense } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Header from './Header';
import history from '../history';
import Beverages from '../beverages/js/Beverages';
import Food from '../food/js/Food';
import Quenchers from '../quenchers/js/Quenchers';
import Cart from '../cart/js/Cart';
import PrintOrder from './PrintOrder';
import PageNotFound from './PageNotFound';

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={Beverages} />
            <Route path="/food" exact component={Food} />
            <Route path="/quenchers" exact component={Quenchers} />
            <Route path="/print" exact component={PrintOrder} />
            <Suspense fallback={'<div>Loading</div>'}>
              <Route path="/cart" exact component={Cart} />
            </Suspense>

            <Route path="*" component={PageNotFound} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
