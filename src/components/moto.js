const Moto = ({ moto, writter }) => {
  return (
    <div>
      <div className="w-[420px] text-white text-2xl p-8">
        {moto}
        <span className="block text-blue-800 font-semibold">{writter}</span>
      </div>
    </div>
  );
};

export default Moto;
