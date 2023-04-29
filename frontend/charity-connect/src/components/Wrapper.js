import { Link, Outlet } from 'react-router-dom';

export default function Wrapper() {
    return (
      <>
        <header>
          <div id="nav">
            <div className="header-container">
              <Link to="/projects" className="header-link" id="navLink">
                Projects
              </Link>
              <Link to="/projects/search" className="header-link" id="navLink">
                Search
              </Link>
              <Link to="/donations" className="header-link" id="navLink">
                Donations
              </Link>
            </div>
          </div>
        </header>
        <Outlet />
      </>
    );
  }