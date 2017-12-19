import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Bookshelf from './Bookshelf';

class Library extends Component {
  moveBooks = (shelf) => {
    const { books } = this.props;
    return books.filter((book) => book.shelf === shelf);
  }

  render () {
   const { onChangeBookShelf } = this.props;

   return(
       <div className="list-books">
       <div className="list-books-title">
         <h1>MyReads</h1>
       </div>
       <div className="list-books-content">
         <div>
           <Bookshelf
             name="Currently Reading"
             books={ this.moveBooks('currentlyReading') }
             onChangeBookShelf={ onChangeBookShelf }
           />
           <Bookshelf
             name="Want to Read"
             books={ this.moveBooks('wantToRead') }
             onChangeBookShelf={ onChangeBookShelf }
           />
           <Bookshelf
             name="Read"
             books={ this.moveBooks('read') }
             onChangeBookShelf={ onChangeBookShelf }
           />
         </div>
       </div>
       <div className="open-search">
         <Link
               to="/search"
           >
               Add a book
         </Link>
       </div>
     </div>
   );
  }
 }

 export default Library;
