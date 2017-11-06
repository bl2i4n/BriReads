import React from 'react';

class Books extends Component {

  static propTypes = {
    book: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRquired
  }

  render(){
    const {title, bookID, authors} = this.props.book
    const book = this.props.book
  }

  return (
    //change this to be a ordered list of books mapped
    <div className="book">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
      <ol className="book-grid">
        {books.map((book) => (
          <li key={book.id}>
          </li>
        ))}
      </ol>
    </div>
  )
}
