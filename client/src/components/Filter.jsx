const Filter = ({ tag, setTag, title, setTitle, limit, setLimit }) => {
  const TAGS = ["all", "sport", "travel", "food", "game", "software"];

  const handleTag = (tag) => {
    setTag(tag);
  };

  return (
    <div className="border-r">
      <form className=" w-[90%]  mx-auto">
        <div className="flex gap-2 flex-col items-center">
          <label htmlFor="search" className="uppercase text-2xl">
            Search
          </label>
          <input
            type="text"
            id="search"
            placeholder="title"
            value={title}
            className="px-4 py-2 border outline-none rounded-sm"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mx-5 flex flex-col gap-2 items-center">
          <h3 className="uppercase text-2xl mt-14">Filter</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {TAGS.map((t, i) => (
              <div
                key={i}
                className={`w-24 h-10 flex items-center justify-center uppercase cursor-pointer ${
                  tag === t && "bg-cyan-200/60"
                }`}
                onClick={() => handleTag(t)}
              >
                {t}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center mt-14">
          <label htmlFor="limit" className="uppercase text-2xl">
            Limit
          </label>
          <input
            type="number"
            id="limit"
            placeholder="5 eg"
            className="border outline-none px-4 py-2 rounded-sm"
            onChange={(e) => setLimit(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default Filter;
