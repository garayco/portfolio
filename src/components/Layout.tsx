import { Link, Outlet } from "react-router-dom";
import { getWithBasePath } from "../utils/getWithBasePath";


export const Layout: React.FC = () => {
  return (
    <div>
      <nav>
        <Link to={getWithBasePath()}>Home</Link>
        <Link to={getWithBasePath("contact")}>Contact</Link>
      </nav>
      <Outlet />
    </div>
  );
};
