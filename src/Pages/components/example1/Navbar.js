import logo from "../pictures/skiing-2951561.svg";

const Navbar = () => {
  return (
    <nav className="nav1">
      <img src={logo} alt="logo" ></img>
      <ul className="nav1_links">
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
