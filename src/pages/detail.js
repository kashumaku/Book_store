import { Link, useParams } from "react-router-dom";
import { books } from "../assets/db/bookdata";
import { useState } from "react";
import TopBar from "../components/topBar";
import EpisodeList from "../components/episodeList";
import AddEpisode from "../components/addEpisode";
import Footer from "../components/footer";
import next from "../assets/img/next.png";
import { FaAngleDown } from "react-icons/fa";

const Detail = () => {
  const params = useParams();
  const [episode, setEpisode] = useState(1);
  const [showAdd, setShowAdd] = useState(false);
  const [showEpisodeList, setShowEpisodeList] = useState(false);
  const bookId = Number(params.id);
  const book = books.filter((b) => b.id === bookId)[0];

  const handelNext = () => {
    setEpisode((pre) => pre + 1);
  };

  return (
    <div className="h-screen">
      <TopBar />

      <div className="bg-black text-white ">
        {/* detail sidebar */}
        <div className="bg-[#50f] h-16 lg:w-[70%] m-auto text-2xl flex items-center justify-around">
          <h1 className="">{book.title}</h1>
          <div className="relative">
            <span
              className="text-orange-400 flex items-center gap-4"
              onClick={() => setShowEpisodeList(!showEpisodeList)}
            >
              Part:{episode} <FaAngleDown size={28} fill="white" />
            </span>
            {showEpisodeList && (
              <div className="absolute  top-10 bg-[#50f] w-[240px] p-4 flex flex-col gap-4">
                {book.story.map((ep) => (
                  <EpisodeList
                    part={ep}
                    episodeState={episode}
                    openEpisode={setEpisode}
                    setShowEpisodeList={setShowEpisodeList}
                  />
                ))}
              </div>
            )}
          </div>
          <button onClick={() => setShowAdd(true)} className="bg-green">
            Add episode
          </button>

          {/*add episode  */}
          {showAdd && <AddEpisode cancelAdd={setShowAdd} />}
          {/*  */}
        </div>
        <div className="bg-black text-white h-screen overflow-y-scroll">
          {episode && (
            <p className="lg:w-[70%] min-h-full p-4 pb-8  m-auto text-xl tracking-wider ">
              {book.story.filter((ep) => ep.ep === episode)[0].content}
              {book.story.length > episode && (
                <img
                  src={next}
                  className="w-16 mr-8  float-end"
                  onClick={handelNext}
                />
              )}
            </p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Detail;
