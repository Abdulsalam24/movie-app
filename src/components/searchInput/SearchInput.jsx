import { useContext, useState } from "react";
import MovieContext from "../../context/MovieContext";

import "../../assets/styles/searchInput.scss";

function SearchInput() {
  const { searchHandle } = useContext(MovieContext);

  const [text, setText] = useState("");

  const onSubmitSearch = (e) => {
    e.preventDefault();
    searchHandle(text);
  };

  return (
    <div className="form">
      <form onSubmit={onSubmitSearch}>
        <input
          type="text"
          placeholder="Search Movie"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button>search</button>
      </form>
    </div>
  );
}

export default SearchInput;
