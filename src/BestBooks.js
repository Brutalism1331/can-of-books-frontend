import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import { withAuth0 } from "@auth0/auth0-react";
import axios from 'axios';


class MyFavoriteBooks extends React.Component {

  serverRequest = async () => {
    const { getIdTokenClaims } = this.props.auth0;
    let tokenClaims = await getIdTokenClaims();
    const jwt = tokenClaims.__raw;
    const config = { headers: { "Authorization": `Bearer ${jwt}` } };

    const serverResponse = await axios.get('http://localhost:3001/test', config);
    console.log(serverResponse);
  }

  render() {
    return (
      <Jumbotron>
        <h1>My Favorite Books</h1>
        <button onClick={this.serverRequest}>
          Click Me To Send Server Request!
        </button>
        <p>
          This is a collection of my favorite books
        </p>
      </Jumbotron>
    )
  }
}

export default withAuth0(MyFavoriteBooks);
