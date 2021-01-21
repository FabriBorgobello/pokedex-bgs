import * as React from "react";
import { Pagination as PaginationMUI } from "@material-ui/lab";
import { PokeList } from "../../context/PokeList";

const Pagination = ({ limit, setOffset }) => {
  const [pokeList] = React.useContext(PokeList);
  const [totalPages, setTotalPages] = React.useState(0);
  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    setTotalPages(Math.ceil(pokeList.count / limit));
  }, [pokeList.count, limit]);

  React.useEffect(() => {
    const newOffset = limit * (page - 1);
    setOffset(newOffset);
  }, [limit, page, setOffset]);

  const handleChange = (event, value) => setPage(value);

  return <PaginationMUI count={totalPages} page={page} onChange={handleChange} />;
};

export default Pagination;
