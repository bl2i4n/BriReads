import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import {Route} from 'react-router-dom';
import Bookshelf from './Bookshelf';
import Library from './Library';
import Search from './Search';

class BooksApp extends React.Component {
  constructor (){
    super();
    this.state = BooksAPI.getAll().then((books) => {
      this.setState({books: books});
    });
  }

  addBook = (book) => {
    const {shelf} = book;

    BooksAPI.update(book, shelf).then(this.setState({
      books: this.state.books.concat(book)
    }));

    BooksAPI.getAll().then((books) => {
      console.log(books);
    });

    console.log(this.state.books);
  };

  /**
  Changes the book state or Adds it to the Library in a stateBooks
  @param {string} id
  @param {string} status
  @param {string} shelf
  */
  changeBookShelf = (book, updatedShelf) => {
    console.log(book);
    const {books} = this.state;
    let bookIndex = books.findIndex((key) =>{
      return key.id  === book.id;
    });
    if (bookIndex === -1){
      const newBook = Object.assign({}, book);
      newBook.shelf = updatedShelf;
      this.addBook(newBook);
      return;
    }

    const stateBooks = Object.assign([], books);
    stateBooks[bookIndex] = Object.assign({}, stateBooks[bookIndex]);
    stateBooks[bookIndex].shelf = updatedShelf;

    BooksAPI.update(book, updatedShelf).then(
      this.setState({books: stateBooks})
    );
  };

    removeBook = (book) => {
      this.setState((state) => ({
        books: state.books.filter((b) => b.id !== b.id)
      }));

  };

  render () {
    const {books} = this.state;

    if (!books){
      return null;
    }

    return(
      <div className="app">
        <Route path="/search" render={ () => (
            <Search
              libraryBooks={books}
              onChangeBookShelf={this.changeBookShelf}
            />
        )} />

        <Route exact path="/" render={ () => (
          <Library
            books={books}
            onChangeBookShelf={this.changeBookShelf}
          />
        )} />

      </div>
    );
  }
}

export default BooksApp
