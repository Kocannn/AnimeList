const Pagignation = ({ page, lastPage, setPage }) => {
  const scrollTop = () => {
    scrollTo({
      behavior: "auto",
      top: 0,
    });
  };

  const handlePrev = () => {
    setPage((prevState) => prevState - 1);
    scrollTop();
  };

  const handleNext = () => {
    setPage((prevState) => prevState + 1);
    scrollTop();
  };

  return (
    <div className="flex justify-center ">
      <div className="flex gap-4 mb-4 items-center">
        <button
          onClick={handlePrev}
          className={`flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-color-primary border border-gray-300 rounded-lg ${page === 1 ? 'opacity-50 cursor-not-allowed hover:bg-color-primary hover:text-gray-500' : 'hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-color-primary'}`}
          disabled={page === 1}
        >
          Previous
        </button>
        <p className="text-color-primary mx-auto">
          {page} of {lastPage}
        </p>
        <button
          onClick={handleNext}
          className={`flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-color-primary border border-gray-300 rounded-lg ${page === lastPage ? 'opacity-50 cursor-not-allowed hover:bg-color-primary hover:text-gray-500' : 'hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-color-primary'}`}
          disabled={page === lastPage} 
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagignation;
