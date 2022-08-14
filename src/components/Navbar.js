import React, {useContext} from 'react';
import { Link, useHistory, useLocation } from "react-router-dom";
import { UserContext } from './UserContext';

const Navbar = () => {
    const {user, setUser} = useContext(UserContext);
    const location = useLocation();
    const history = useHistory();

    const logoutHandler = () => {
        setUser(null);
        localStorage.removeItem('user');
        history.push('/');
    }

    const dashboardHandler = () => {
        if (user==null)
            return '/login';
        else {
            if (user.did)
                return '/doctor';
                return '/patient';
        }
    }

    return (
        <div>
            <nav className={`navbar fixed-top navbar-expand-md navbar-dark ${location.pathname==='/'? 'bg-transparent': 'bg-dark'}`} aria-label="Navbar">
                <div className="container">
                    <Link to="/" className="navbar-brand" ><span><i className="fa fa-heartbeat me-2" aria-hidden="true"/>Medway</span></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarsExample04">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <Link to="/about" className="nav-link px-2 text-white"><li>About</li></Link>
                            <Link to={dashboardHandler} className="nav-link px-2 text-white"><li>Dashboard</li></Link>
                            <Link to="/covid-tracker" className="nav-link px-2 text-white"><li>Covid-Tracker</li></Link>
                        </ul>
                        { user ?
                            (<div className="dropdown text-end">
                                <a href="!#" className="d-block link-light text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                    {user.did?`Dr. ${user.name}`: user.name}<i className="fa fa-user text-white fs-5 ms-2" />
                                </a>
                                <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1">
                                    <li><span className="dropdown-item" role="button" onClick={logoutHandler}>Sign out</span></li>
                                </ul>
                            </div>)
                            :
                            (<div className="text-end">
                                <Link to="/login"><button type="button" className="btn btn-outline-light me-2">Login</button></Link>
                                <Link to="/register"><button type="button" className="btn btn-info me-2">Sign-up</button></Link>
                            </div>)
                        }
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
