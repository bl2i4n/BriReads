import React, {Component} from 'react';
import Book from './Book';

class Bookshelf extends Component {


  render () {
    const {name, books, onChangeBookStatus} = this.props;

    //put static html of books here
    return(
        <div className="bookshelf">
          <h2 className="bookshelf-title">{name}</h2>
          <div className="bookshelf-books">
          <ol className="books-grid">
            {
              books.map((book) => (
                <li key={book.id}>
                  <Book
                    //adding id to find books
                    id={book.id}
                    authors={book.authors}
                    title={book.title}
                    coverURL={book.coverURL}
                    status={book.status}
                    onChangeBookStatus={onChangeBookStatus}
                  />
                </li>
              ))
            }
          </ol>
        </div>
      </div>
    );

  }

}

export default Bookshelf;
