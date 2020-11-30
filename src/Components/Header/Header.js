import React from "react";

const Header = ({ title, subtitle }) => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="header__title">{title}</h1>
        {subtitle && <p className="header__subtitle">{subtitle}</p>}
      </div>
    </header>
  );
};

Header.defaultProps = {
  title: "Indecision",
};

export default Header;
