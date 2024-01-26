const EpisodeList = ({
  episodeState,
  part,
  openEpisode,
  setShowEpisodeList,
}) => {
  return (
    <p
      className="cursor-pointer hover:bg-yellow-700"
      key={part}
      style={{
        color: `${episodeState === part ? "green" : "white"}`,
      }}
      onClick={() => {
        openEpisode(part.ep);
        setShowEpisodeList(false);
      }}
    >
      Part: {part.ep} {part.title}
    </p>
  );
};

export default EpisodeList;
