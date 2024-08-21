const Header = ({ heading }: { heading: String }) => {
  return (
    <div className="flex justify-center">
      <h1 className="sm:text-lg md:text-xl lg:text-2xl">{heading}</h1>
    </div>
  );
};

export default Header;
