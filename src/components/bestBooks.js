import { Link } from "react-router-dom";
import { books } from "../assets/db/bookdata";
const BestBooks = () => {
  return (
    <div className="flex  justify-between  my-20 lg:w-[60%] p-4 m-auto">
      {books.map((book) => (
        <div key={book.id} className=" bg-black  rounded-xl overflow-hidden">
          <img src={book.thumbnail} alt="" className="w-[180px] h-[150px]" />
          <div className="flex flex-col items-center  py-6 px-4">
            <h1 className="capitalize text-xl max-w-fit text-orange-400 font-serif  w-[150px] ">
              {book.title}
            </h1>
            <Link
              to={`/${book.id}`}
              className="bg-[#292854] text-[#2faceb] font-bold px-8 py-2 rounded-lg"
            >
              Read
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BestBooks;
