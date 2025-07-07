import '../App.css';
import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="layout-container">
      <header>
        <div className="head">
            <h1>📚 Book Explorer</h1>
            <nav className="navbar">
              <NavLink to="/home" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
              <NavLink to="/books" className={({ isActive }) => isActive ? 'active' : ''}>Books</NavLink>
              <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
            </nav>
        </div>
      </header>

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="footer">
        <p>© 2025 Book Explorer. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;