import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BestBooks.css';
import { withAuth0 } from "@auth0/auth0-react";
import Carousel from 'react-bootstrap/Carousel'
import axios from 'axios';
import { Jumbotron } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

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
    console.log('booksArr', this.state.booksArr);
    return (
      <>

        <Jumbotron>

          {this.state.booksArr.length > 0 ? <Carousel>{this.state.booksArr.map(x => (
            <Carousel.Item key={x._id}>

              <img src="https://via.placeholder.com/150" alt="placeHolder" />

              <Carousel.Caption>

                <h3>{x.title}</h3>
                <p>{x.description}</p>

              </Carousel.Caption>
            </Carousel.Item>
          ))}
          </Carousel>
            : ''}

        </Jumbotron>

      </>
    );
  }
}
export default withAuth0(MyFavoriteBooks);


