import SearchInput from "./searchInput/SearchInput";
import "../assets/styles/header.scss";

function Header() {
  return (
    <header>
      <div className="home">
        <h1>Welcome.</h1>
        <h2>
          Millions of movies, TV shows and people to discover. Explore now.
        </h2>
        <SearchInput />
      </div>
    </header>
  );
}

export default Header;
