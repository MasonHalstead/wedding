import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import importedComponent from 'react-imported-component';
import { Grid } from 'react-bootstrap';

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
const renderMergedProps = (component, ...rest) => {
  const finalProps = Object.assign({}, ...rest);
  return (
    React.createElement(component, finalProps)
  );
};
const PropsRoute = ({ component, ...rest }) => {
  return (
    <Route {...rest} render={routeProps => {
      return renderMergedProps(component, routeProps, rest);
    }}/>
  );
};

const App = (props) => {
  return (

    <Router>
      <div>
        <div className="container-fluid">
          <Navigation navigation={ props.general.navigation }/>
        </div>
        <Grid>
          <Switch>
            <PropsRoute exact path="/" component={Home} home={ props.general.home }/>
            <PropsRoute exact path="/dynamic" component={AsyncDynamicPage} />
            <PropsRoute component={AsyncNoMatch} />
          </Switch>
        </Grid>
      </div>
    </Router>
  );
};

export default App;
