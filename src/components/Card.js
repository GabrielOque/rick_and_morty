const Card = ({ results, handleDowload }) => {
  return (
    <>
      {results.map((items) => (
        <div
          key={items.id}
          className="flex flex-col justify-around p-2 mb-4 bg-blue-200 rounded-xl"
        >
          <img src={items.image} alt="" />
          <p className="pt-1 font-bold">Name: {items.name}</p>
          <hr />
          <p>Location: {items.location.name}</p>
          <p className="pt-1">Origin: {items.origin.name}</p>
          <button
            className="p-1 mt-3 mb-2 font-bold bg-red-500 rounded-lg hover:bg-blue-700"
            onClick={() => handleDowload(items.image)}
          >
            Descargar
          </button>
        </div>
      ))}
    </>
  );
};

export default Card;
