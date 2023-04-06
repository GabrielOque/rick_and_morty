const Pagination = ({ onPrev, onNext, prev, next }) => {
  const handlePrev = () => {
    onPrev();
  };

  const handleNext = () => {
    onNext();
  };

  return (
    <>
      <div className="flex justify-center mt-32 mb-4">
        <div className="flex w-36">
          {prev && (
            <button
              className="px-4 font-bold bg-red-400 rounded-xl"
              onClick={handlePrev}
            >
              Prev
            </button>
          )}
          {next && (
            <button
              className="px-4 font-bold bg-red-400 rounded-xl"
              onClick={handleNext}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Pagination;
