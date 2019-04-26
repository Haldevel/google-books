import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

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
    API.getBooks()
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
            <article>
              <h1>Synopsis</h1>
              <p>{this.state.book.synopsis}</p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-12 sm-12">
            {this.state.returnedBooks.length ? (
              <List>
                {this.state.returnedBooks.map(book => (
                  <ListItem  
                    key={book.id}
                    title={book.volumeInfo.title}
                    author={book.volumeInfo.authors[0]}
                    synopsis={book.volumeInfo.description}
                    cover={book.volumeInfo.imageLinks.thumbnail}
                    link={book.volumeInfo.infoLink}
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
