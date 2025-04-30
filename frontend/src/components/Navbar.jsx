import { Link } from "react-router-dom"
import "../assets/navbar.css"
const Navbar = () => {
    return (
        <nav>
            <div class="nav-container">
                <div class="logo">
                    <img src="https://play-lh.googleusercontent.com/7y6gd1TKP4skySj-zI3KUs9uw9bpC99EOQNKa6BefSUHzzesFpIex3pDXWCCDTYywLM=w240-h480-rw" alt="Logo" />
                </div>
                <ul class="nav-links">
                    <li ><Link className="nav-link" to="/">Home</Link></li>
                    <li> <Link className="nav-link" to="/add">Post Job</Link></li>
                </ul>
            </div>
        </nav>

    )
}
export default Navbar