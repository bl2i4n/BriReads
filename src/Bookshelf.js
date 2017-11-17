import React, {Component} from 'react';
import Book from './Book'

class Bookshelf extends Component {
  state = {
    //add status of books for option values here
    status: 'none'
  }

  //move this function to app.js
  // moveBooks = (status) =>{
  //   const {books} = this.props;
  //   return books.filter((book) => book.status === status);
  // }


  render () {
    const {name, books} = this.props;

    //put static html of books here
    return(
        <div className="bookshelf">
          <h2 className="bookshelf-title">{name}</h2>
          <div className="bookshelf-books">
          <ol className="books-grid">
            {

            }
          </ol>
        </div>
      </div>
    );

  }

}

export default Bookshelf;
