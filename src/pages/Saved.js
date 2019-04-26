import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { List, ListItem } from "../components/List";

class Saved extends Component {
  state = {
    savedBooks: [],
    isLoaded: false,
    error: null
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getSaved()
      .then(
        res => { this.setState({ savedBooks: res.data, isLoaded: true }) },
        error => {
          this.setState({ isLoaded: true, error });
        }
      )
    //.catch(err => console.log(err));
  };


  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                (React) Google Books Search
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
          </Col>
        </Row>
        <Row>
          <Col size="md-12 sm-12">
            {this.state.savedBooks.length ? (
              <List>
                {this.state.savedBooks.map(book => (
                  <ListItem
                    key={book.id}
                    title={book.title}
                    author={book.author[0]}
                    synopsis={book.synopsis}
                    cover={book.thumbnail}
                    //link={book.volumeInfo.infoLink}
                  />
                ))}
              </List>
            ) : (
                <h3>No Results to Display</h3>
              )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Saved;
