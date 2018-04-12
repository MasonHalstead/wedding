import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import importedComponent from 'react-imported-component';

import Navigation from './Pages/Navigation';
import Home from './Pages/Home';
import Loading from './Pages/Loading';

const AsyncDynamicPage = importedComponent(
  () => import('./Pages/DynamicPage'),
  {
    LoadingComponent: Loading
  }
);
const AsyncNoMatch = importedComponent(
  () => import('./Pages/NoMatch'),
  {
    LoadingComponent: Loading
  }
);

const App = () => {
  return (

    <Router>
      <div className="container-fluid">
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dynamic" component={AsyncDynamicPage} />
          <Route component={AsyncNoMatch} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
