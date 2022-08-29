import Logo from "../Logo/Logo"
import CartWidget from "../Widget/Widget";
import Index from "../Title/Index";

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
