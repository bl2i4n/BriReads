import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Bookshelf from './Bookshelf';

class Library extends Component {
  moveBooks = (status) => {
    const {books} = this.props;
    return books.filter((book) => book.status === status);
  }

  render () {
   const { onChangeBookStatus } = this.props;

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
             onChangeBookStatus={ onChangeBookStatus }
           />
           <Bookshelf
             name="Want to Read"
             books={ this.moveBooks('wantToRead') }
             onChangeBookStatus={ onChangeBookStatus }
           />
           <Bookshelf
             name="Read"
             books={ this.moveBooks('read') }
             onChangeBookStatus={ onChangeBookStatus }
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
