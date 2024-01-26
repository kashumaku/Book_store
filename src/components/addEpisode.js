const AddEpisode = ({ cancelAdd }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        height: "100vh",
        width: "100vw",
        backgroundColor: "rgba(0,0,0, 0.8)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="p-[20px] w-screen max-md:h-screen  lg:w-[50%]"
        style={{
          borderRadius: "30px",
          display: "flex",
          gap: "10px",
          flexDirection: "column",
          backgroundColor: "gray",
        }}
      >
        <label htmlFor="">Title</label>
        <input type="text" style={{ padding: "5px" }} />
        <label htmlFor="">Content</label>
        <textarea rows={20} style={{ resize: "none" }}></textarea>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <button
            style={{
              backgroundColor: "blue",
              color: "white",
              paddingBlock: "10px",
              paddingInline: "40px",
              fontWeight: "bold",
              border: "none",
            }}
          >
            Add
          </button>
          <button
            onClick={() => cancelAdd(false)}
            style={{
              backgroundColor: "crimson",
              color: "white",
              paddingBlock: "10px",
              paddingInline: "40px",
              fontWeight: "bold",
              border: "none",
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEpisode;
