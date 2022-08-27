import PropTypes from "prop-types";

const Pagination = ({ onPageChange, cPage, pagesCount }) => {
  const pages = [1, 2, 3, 4, 5];
  return (
    <div className="d-flex justify-content-center pagi-marg">
      {pagesCount > 1 && (
        <nav>
          <ul className="pagination rounded">
            {pages.map((p) => (
              <li
                key={p}
                onClick={() => {
                  onPageChange(p);
                }}
                className={cPage === p ? "page-item active" : "page-item"}
              >
                <button className="page-link pagi-nums">{p}</button>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};

Pagination.propTypes = {
  onPageChange: PropTypes.func.isRequired,
  cPage: PropTypes.number.isRequired,
};

export default Pagination;
