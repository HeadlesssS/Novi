import logo from "../assets/img/logo.png";

function Logo({ light = false }) {
  return (
    <a
      className={`brand ${light ? "brand--light" : ""}`}
      href="/"
      aria-label="Novi home"
    >
      <span className="brand-image">
        <img src={logo} alt="Novi" />
      </span>
    </a>
  );
}

export default Logo;
