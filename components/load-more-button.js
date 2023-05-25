import { useContext } from "react";
import { LocationsContext } from "../store";

export const LoadMoreButton = () => {
  const { info, setPage } = useContext(LocationsContext);

  if (!info?.next) {
    return null
  }

  return (
    <button
      style={{ display: "flex", width: "200px", height: "30px" }}
      onClick={() => setPage(prev => ++prev)}
    >
      Load More
    </button>
  );
};
