
const Pagination = ({ totalPosts, postPerPage, setPage }) => {
  const pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="flex justify-center gap-3 mt-6 flex-wrap">
      {pages.map((item, index) => (
        <button
          key={index}
          onClick={() => setPage(item)}
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded-lg shadow transition"
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
