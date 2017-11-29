import React, {Component} from 'react';

//how is this getting the book data?
class Book extends Component {

  state = {
    status: 'none'
  };

  render(){
    const { title, authors, coverURL, status, onChangeBookStatus} = this.props;
    return(
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={ { width: 128, height: 193, backgroundImage: `url("${ coverURL }")` } }>
          </div>
          <div className="book-shelf-changer">
            <select
              value={status}
              onChange={ (event)=> onChangeBookStatus(this.props, event.target.value) }
            >
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
          <div className="book-title">{title}</div>
          <div className="book-authors">{authors}</div>
        </div>
      </div>
    );
  }

}

export default Book;
