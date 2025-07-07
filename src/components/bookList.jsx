import '../App.css'

import { Link, Outlet } from 'react-router-dom';
import { books } from '../data.js';

const BookList = () =>{
    return(
    <div className="booklist">
        <h2>Book List</h2>
        <ul className="list">
          {books.map((book) => (
            <li key={book.id}>
              <Link to={`/books/${book.id}`}>{book.title}</Link>
            </li>
          ))}
        </ul>
        
        <div className="details"><Outlet /></div >
    </div> 
    );
}

export default BookList