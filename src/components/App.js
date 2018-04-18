import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import importedComponent from 'react-imported-component';
import { Grid } from 'react-bootstrap';
import Flexbox from 'flexbox-react';

import Navigation from './global/Navigation';
import Home from './home/Home';
import Loading from './global/Loading';
import Footer from './global/Footer';
import RSVPModal from './global/RSVPModal';

const AsyncGalleryPage = importedComponent(
  () => import('./gallery/Gallery'),
  {
    LoadingComponent: Loading
  }
);
const AsyncRegistryPage = importedComponent(
  () => import('./registry/Registry'),
  {
    LoadingComponent: Loading
  }
);
const AsyncNoMatch = importedComponent(
  () => import('./global/NoMatch'),
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
      <React.Fragment>
        <Flexbox flexDirection="column" minHeight="100vh">
          <Navigation navigation={ props.general.navigation } modal={ props.general.modal }/>
          <Flexbox flexGrow={1}>
            <Grid>
              <Switch>
                <PropsRoute exact path="/" component={Home} home={ props.general.home }/>
                <PropsRoute exact path="/gallery" gallery={ props.general.gallery } component={AsyncGalleryPage} />
                <PropsRoute exact path="/registry" registry={ props.general.registry } component={AsyncRegistryPage} />
                <PropsRoute component={AsyncNoMatch} />
              </Switch>
            </Grid>
          </Flexbox>
          <Footer footer={ props.general.footer }/>
        </Flexbox>
      </React.Fragment>
    </Router>
  );
};

export default App;
