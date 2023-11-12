import { Outlet } from "react-router-dom";



export const Layout: React.FC = () => {
  return (
    <>
{/*       <nav>
        <Link to={getWithBasePath()}>Home</Link>
        <Link to={getWithBasePath("contact")}>Contact</Link>
      </nav> */}
      <Outlet />
    </>
  );
};
