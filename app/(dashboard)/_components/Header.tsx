import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="py-4 px-4 border-b shadow-sm">
      <div className="container">
        <div className="flex items-center justify-between gap-4">
          <Logo />
          <SearchBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
