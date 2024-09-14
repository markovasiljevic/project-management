import ProjectLogo from "../assets/no-projects.png";

export default function MainScreen({handleAdding}) {
  return (
    <div className="flex justify-start items-center h-screen flex-col mt-[30vh]">
      <img
        src={ProjectLogo}
        className="w-[60px] h-[60px]"
        alt="Project logo "
      />
      <h2 className="pt-3 text-xl text-stone-500 font-bold">
        No project selected
      </h2>
      <p className="pb-7 pt-5 ">
        Select a project or get started with a new one
      </p>
      {/* Base */}

      <button
        className="inline-block rounded border  bg-stone-700 px-4 py-2 text-base font-medium text-stone-400 hover:bg-transparent hover:text-stone-600 focus:outline-none focus:ring active:text-stone-400"
        href="#"
        onClick={handleAdding}
      >Create new project</button>
    </div>
  );
}
