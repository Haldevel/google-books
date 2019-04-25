import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";
import SaveBtn from "../components/Savebtn/Save";

class Search extends Component {
  state = {
    returnedBooks: [],
    searchTerm: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    API.searchBook(this.state.searchTerm).then(res => {
      console.log(res);
      this.setState({ returnedBooks: res.data.items })
    })
  };

  saveBook = bookData => {
    API.saveBook(bookData).then(res => console.log(res));
  }

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>Search books</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.searchTerm}
                onChange={this.handleInputChange}
                name="searchTerm"
                placeholder="Search term (required)"
              />
              <FormBtn
                disabled={!(this.state.searchTerm)}
                onClick={this.handleFormSubmit}
              >
                Search books
              </FormBtn>
            </form>
          </Col>
        </Row>
        <Row>
          <Col size="md-12 sm-12">
            {this.state.returnedBooks.length ? (
              <List>
                {this.state.returnedBooks.map(book => (
                  <div>
                    <ListItem
                      key={book.id}
                      title={book.volumeInfo.title}
                      author={book.volumeInfo.authors[0]}
                      synopsis={book.volumeInfo.description}
                      cover={book.volumeInfo.imageLinks.thumbnail}>
                    </ListItem>
                    <SaveBtn onClick={() => this.saveBook({
                      title: book.volumeInfo.title,
                      author: book.volumeInfo.authors[0],
                      synopsis: book.volumeInfo.description,
                      cover: book.volumeInfo.imageLinks.thumbnail
                    })} />
                  </div>

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

export default Search;
