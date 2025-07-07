import '../App.css'
import { Link } from 'react-router-dom';

const Home = () => {
    return(
        <div className="home">
            <h2>Welcome to Book Explorer</h2>
            <Link to="/books">Explore Our Collections</Link>
        </div>
    )
}

export default Home;