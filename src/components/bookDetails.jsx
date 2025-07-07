import '../App.css'

import { useParams, useNavigate } from 'react-router-dom';
import { books } from '../data';

const BookDetails = () => {
  const { bookId } = useParams();
  const navigate = useNavigate();
  const book = books.find((b) => b.id.toString() === bookId);

  if (!book) return <p>Book not found!</p>;

  return (
    <div className="details">
      <h3>{book.title}</h3>
      <p>{book.description}</p>
      <button onClick={() => navigate('/books')}>Back to Book List</button>
    </div>
  );
};

export default BookDetails;
