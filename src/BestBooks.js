import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BestBooks.css';
import { withAuth0 } from "@auth0/auth0-react";
import axios from 'axios';


class MyFavoriteBooks extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      booksArr: [],
    };
  };

  componentDidMount = async () => {
    const { getIdTokenClaims } = this.props.auth0;
    let tokenClaims = await getIdTokenClaims();
    const jwt = tokenClaims.__raw;
    console.log('jwt: ', jwt);
    const config = {
      headers: { "Authorization": `Bearer ${jwt}` },
    };

    const serverResults = await axios.get('http://localhost:3001/books', config);
    console.log(serverResults.data);
    this.setState({
      booksArr: serverResults.data
    })
  }
  render() {
    console.log(this.state)
    return (
      <>
        <h4>BestBooks Component Is Working</h4>
      </>
    );
  }
}
export default withAuth0(MyFavoriteBooks);


