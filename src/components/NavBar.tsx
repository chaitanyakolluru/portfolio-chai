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
      <div className="navbar-start">
        {/* <a className="btn btn-ghost normal-case text-xl">Chaitanya Kolluru</a> */}
        <Link to="/" className="text-lg font-bold">
          <button>{title}</button>
        </Link>
      </div>
      {/* <div className="navbar-center flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Item 1</a>
          </li>
          <li tabIndex={0}>
            <a>
              Parent
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2">
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
            </ul>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default NavBar;
