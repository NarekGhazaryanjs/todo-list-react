import classes from './Pagination.module.css';

const Pagination = ({
    page,
    pageCount,
    handlePageChange,
}: any) => (
    <>
      {new Array(Math.ceil(pageCount)).fill(0).map((item, index) => (
          <button
            className={`${page === index && classes.active} ${classes.button}`}
            onClick={() => handlePageChange(index)}
          >
              {index + 1}
          </button>
      ))}
    </>
);

export default Pagination;
