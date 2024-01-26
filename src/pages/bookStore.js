import { Link } from "react-router-dom";
import { books } from "../assets/db/bookdata";
import TopBar from "../components/topBar";
import Footer from "../components/footer";

const Books = () => {
  return (
    <div
      style={{
        height: "100vh",
        backgroundImage: "linear-gradient(white,gray)",

        overflow: "scroll",
      }}
    >
      <TopBar />
      <div className="flex flex-col gap-6 py-4">
        {books.map((book) => (
          <Link
            className="flex flex-col items-center gap-2 "
            to={`/${book.id}`}
            key={book.id}
          >
            {/* thumbnail */}
            <img
              src={book.thumbnail}
              alt=""
              className="h-[200px] w-[180px] m-auto"
            />
            <p className="w-[150px]">{book.title}</p>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Books;
