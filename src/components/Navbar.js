const Navbar = ({ brand }) => {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-blue-700">
        <div className="flex justify-center ">
          <a href="/" className="p-2 text-2xl uppercase">
            {brand}
          </a>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
