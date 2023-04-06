const Card = ({ results }) => {
  return (
    <>
      {results.map((items) => (
        <div key={items.id} className="p-1 mb-4 bg-blue-200">
          <img src={items.image} alt="" />
          <p className="pt-1 font-bold">Name: {items.name}</p>
          <hr />
          <p>Location: {items.location.name}</p>
          <p className="pt-1">Origin: {items.origin.name}</p>
        </div>
      ))}
    </>
  );
};

export default Card;
