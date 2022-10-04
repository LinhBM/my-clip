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
            <Link to="/loginpolicy">LoginPolicy</Link>
          </li>
          <li>
            <Link to="/loginforgetpass">Forget Password</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
