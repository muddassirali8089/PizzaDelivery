// No loader needed here

import { useState } from "react";
import { useNavigate } from "react-router-dom";
function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const querytrim = query.trim();
    setQuery("");

    if (querytrim === "") return;
    navigate(`/order/${querytrim}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="enter id #"
      />
    </form>
  );
}

export default SearchOrder;
