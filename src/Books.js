import React from 'react';

class Books extends Component {

  static propTypes = {
    book: PropTypes.object.isRequired
  }

  render(){
    const {title, bookID, authors} = this.props.book
    const book = this.props.book
  }

  return (
    <div className="book">
      <div className="book-top">
      <div className="book-cover" style={{width: 128, height: 193, backgroundImage: `url(${book,imageLinks.smallThumbnail})` }}></div>
      <div className="book-shelf-changer">
           <select defaultValue={book.shelf}
           onChange={this.handleChange}>
           <option value="none" disabled>Move to...</option>
           <option value="currentlyReading">Currently Reading</option>
           <option value="wantToRead">Want to Read</option>
           <option value="read">Read</option>
           <option value="none">None</option>
           </select>
       </div>
      </div>
      <div className="book-title">{title}</div>
    </div>
  )
}
