import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className="flex justify-center text-white bg-gray-600">
      <ul className="flex py-10 gap-8">
        <Link to="/">Home</Link>
        <Link to="/books">Book store</Link>
        <li>Add book</li>
        <li>Support us</li>
      </ul>
    </div>
  );
};

export default TopBar;
