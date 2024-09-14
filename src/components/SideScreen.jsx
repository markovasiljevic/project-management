export default function SideScreen({
  handleAdding,
  arrayOfData,
  handleProject,
}) {
  return (
    <div className="bg-stone-900 w-[30vh] h-screen mt-[4vh] rounded-r-lg ">
      <div className="flex justify-start items-center flex-col  mt-[7vh] mr-[7vh]">
        <h3 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
          YOUR PROJECTS
        </h3>
        <button
          className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100 mr-[3vh]"
          onClick={handleAdding}
        >
          + Add Project
        </button>
        {arrayOfData.map((item, index) => (
          <button
            className="w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-600  text-stone-400 ml-[6.2vh] mt-[1.2vh]"
            key={index}
            onClick={() => handleProject(index)}
          >
            {item.title}
          </button>
        ))}
      </div>
    </div>
  );
}
