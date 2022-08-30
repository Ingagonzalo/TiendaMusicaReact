import Logo from "../Logo/Logo"
import CartWidget from "../Widget/Widget";
import Index from "../Title/index";

const NavBar = () => {
  return (
    <div className="nav_container">
      <Logo/>
      <Index/>
      <CartWidget/>
    </div>
  );
};

export default NavBar;
