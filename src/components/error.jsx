import '../App.css'
import err from '../assets/error.png'
const NotFound = () => {
  return(
    <div className="error">
      <h2>404 - Page Not Found</h2>
      <img src={err}/>
      <p>The page you requested could not be found.</p>
    </div>
  );
};

export default NotFound;