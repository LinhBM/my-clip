import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-row">
      <nav>
        <ul>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/loginlayout">Login Layout</Link>
          </li>
          <li>
            <Link to="/loginpolicy">Login Policy</Link>
          </li>
          <li>
            <Link to="/loginforgetpass">Forget Password</Link>
          </li>
          <li>
            <Link to="/loginlinkaccount">login link account</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
