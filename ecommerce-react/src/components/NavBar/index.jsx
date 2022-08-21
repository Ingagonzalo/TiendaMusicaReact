export const NavBar = () => {
  return (
    <div className="nav_container">
      <div className="nav_menu">
        <img className="logo_navBar" src="/logo.png" alt="" />
      </div>
      <div className="nav_menu">
        <a href="" className="nav_item">
          Catálogo
        </a>
        <a href="" className="nav_item">
          Blog
        </a>
        <a href="" className="nav_item">
          Galería
        </a>
        <a href="" className="nav_item">
          Contacto
        </a>
      </div>

      <div className="nav_menu">
        <a href="" className="nav_item"><i class="fa-solid fa-magnifying-glass"></i></a>
        <a href="" className="nav_item"><i class="fa-solid fa-user"></i></a>
        <a href="" className="nav_item"><i class="fa-solid fa-cart-shopping"></i></a>
        <a href="" className="nav_item"></a>
      </div>
    </div>
  );
};

export default NavBar;
