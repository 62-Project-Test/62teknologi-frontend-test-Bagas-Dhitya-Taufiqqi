const PaginationComponent = ({ currentPage, totalPages, onPageChange }) => (
  <div className="my-4 space-x-10">
    <button
      className="p-1 w-20 border rounded cursor-pointer"
      onClick={() => onPageChange(currentPage - 1)}
      disabled={currentPage === 1}
    >
      Previous
    </button>
    <span className="mr-2">
      Page {currentPage} of {totalPages}
    </span>
    <button
      className="ml-2 w-20 p-1 border rounded cursor-pointer"
      onClick={() => onPageChange(currentPage + 1)}
      disabled={currentPage === totalPages}
    >
      Next
    </button>
  </div>
);

export default PaginationComponent;
