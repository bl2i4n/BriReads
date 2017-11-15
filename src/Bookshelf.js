import React, {Component} from 'react';

class Bookshelf extends Component {
  state = {
    //add status of books for option values here
    status: 'none'
  }

  moveBooks = (status) =>{
    const {books} = this.props;
    return books.filter((book) => book.status === status);
  }

  //just to check if the selection is pushed to console
  handleChange = (e) =>{
    console.log(e);
  }

  render () {
    const {name, books, title, authors, coverURL} = this.props;

    //put static html of books here
    return(
      <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{name}</h2>
        <div className="bookshelf-books">
        <ol className="books-grid">
        </ol>
        </div>
      </div>

      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={ { width: 128, height: 193, backgroundImage: `url("${ coverURL }")` } }>
          </div>
          <div className="book-shelf-changer">
            <select onChange={this.handleChange}>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
          <div className="book-title"></div>
          <div className="book-authors"></div>
        </div>
      </div>
      </div>
    );

  }

}

export default Bookshelf;
