import "./Header.css";
const Header = (): React.ReactElement => {
  return (
    <header className="main-header">
      <img
        className="logo-club"
        src="public/images/logo_club.jpg"
        alt="logo del club"
        width="100"
        height="100"
      ></img>
      <span className="main-title">Club Btt La Valldigna</span>
    </header>
  );
};

export default Header;
