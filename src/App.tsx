import { useEffect, useState } from "react";
import Pagination from "./components/Pagination";
import Table from "./components/Table";
import { getLength, getUsers } from "./user_data";

const App = () => {
  const [page, setPage] = useState(1);
  const [limit] = useState<number>(10);
  const [search, setSearch] = useState("");

  const totalPage = Math.ceil(getLength() / limit);
  const [searchLength, setSeacthLength] = useState(0);

  console.log("totalPage", totalPage);
  console.log("searchLength", searchLength);

  const handlePageChange = (value: string | number) => {
    if (value === "&laquo;" || value === "... ") {
      setPage(1);
    } else if (value === "&lsaquo;") {
      if (page !== 1) setPage(page - 1);
    } else if (value === "&rsaquo;") {
      if (page !== totalPage) setPage(page + 1);
    } else if (value === "&raquo;" || value === " ...") {
      setPage(totalPage);
    } else {
      setPage(value as number);
    }
  };

  useEffect(() => {
    const aLength = getUsers(page, limit, search);
    setSeacthLength(aLength.length);
  }, [search, page, limit]);

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Table data={getUsers(page, limit, search)} />
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: 50,
        }}
      >
        {/* <SelectLimit onLimitChange={(value) => setLimit(Number(value))} /> */}
        {searchLength >= 10 && (
          <Pagination
            totalPage={totalPage}
            page={page}
            limit={limit}
            sliblings={1}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
};

export default App;
