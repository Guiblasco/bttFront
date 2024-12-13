import NavMenu from "../NavMenu/NavMenu";
import "./Header.css";
const Header = (): React.ReactElement => {
  return (
    <header className="main-header">
      <div className="brand-container">
        <img
          className="logo-club"
          src="images/logo_club.jpg"
          alt="logo del club"
          width="100"
          height="100"
        ></img>
        <span className="main-title">Club Btt La Valldigna</span>
      </div>
      <NavMenu />
    </header>
  );
};

export default Header;
