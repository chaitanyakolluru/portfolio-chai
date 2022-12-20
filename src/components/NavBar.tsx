import { Link } from 'react-router-dom';

const NavBar: React.FC<{ title?: string }> = ({
  title = 'Chaitanya Kolluru',
}) => {
  // const clickToRoot = ({ title }: { title: string }) => {
  //   return (
  //     <Link to="/">
  //       <button>{title}</button>
  //     </Link>
  //   );
  // };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/" className="text-lg font-bold">
              <button>{title}</button>
            </Link>
          </li>
          <li>
            <Link to="/professional" className="text-lg font-bold">
              <button>Professional Experience</button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
