import { createBrowserRouter, Navigate} from 'react-router-dom';


import Layout from './components/layout.jsx';
import Home from './components/home.jsx';
import BookList from './components/bookList.jsx';
import BookDetails from './components/bookDetails.jsx';
import About from './components/about.jsx';
import NotFound from './components/error.jsx';

const bookRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Navigate to="home" replace /> },
      { path: 'home', element: <Home /> },
      { path: 'books', element: <BookList /> },
      { path: 'books/:bookId', element: <BookDetails /> },
      { path: 'about', element: <About /> },
    ],
  },
]);

export {bookRouter}