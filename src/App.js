import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Login from './Login';
import BestBooks from './BestBooks';
import Profile from './Profile';
import './App.css'
import IsLoadingAndError from './IsLoadingAndError';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { withAuth0 } from '@auth0/auth0-react';
// import axios from 'axios';

class App extends React.Component {

  render() {

    console.log('props', this.props.auth0);
    const { user, isLoading, isAuthenticated } = this.props.auth0;

    return (
      <>
        <Router>
          <IsLoadingAndError>
            <Header />
            <Switch>
              <Route exact path="/">
                {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
                {isLoading ? <h2>Loading...</h2> : '' }
                {isAuthenticated ? <BestBooks /> : <Login />}


              </Route>
              {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
              <Route exact path="/profile">

                {isAuthenticated? <Profile /> : '' }

              </Route>
            </Switch>
            <Footer />
          </IsLoadingAndError>
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
