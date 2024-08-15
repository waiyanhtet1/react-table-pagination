import { returnPaginationRange } from "../utils/appUtils";

type PaginationProps = {
  totalPage: number;
  page: number;
  limit: number;
  sliblings: number;
  onPageChange: (args: number | string) => void;
};

const Pagination = ({
  totalPage,
  page,
  limit,
  sliblings,
  onPageChange,
}: PaginationProps) => {
  const array = returnPaginationRange(totalPage, page, limit, sliblings);

  return (
    <ul className="pagination pagination-md justify-content-end">
      <li className="page-item">
        <span className="page-link" onClick={() => onPageChange("&laquo;")}>
          &laquo;
        </span>
      </li>
      <li className="page-item">
        <span className="page-link" onClick={() => onPageChange("&lsaquo;")}>
          &lsaquo;
        </span>
      </li>

      {array.map((value) => (
        <li key={value} className={`page-item ${value === page && "active"}`}>
          <span className="page-link" onClick={() => onPageChange(value)}>
            {value}
          </span>
        </li>
      ))}

      <li className="page-item">
        <span className="page-link" onClick={() => onPageChange("&rsaquo;")}>
          &rsaquo;
        </span>
      </li>
      <li className="page-item">
        <span className="page-link" onClick={() => onPageChange("&raquo;")}>
          &raquo;
        </span>
      </li>
    </ul>
  );
};

export default Pagination;
