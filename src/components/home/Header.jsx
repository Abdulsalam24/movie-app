import "../../assets/styles/header.scss";
import SearchInput from "../SearchInput";

function Header() {
  return (
    <header>
      <div className="home">
        <h1>Welcome</h1>
        <h2>It is the home of movies and television shows. Explore now.</h2>
        <SearchInput />
      </div>
    </header>
  );
}

export default Header;
