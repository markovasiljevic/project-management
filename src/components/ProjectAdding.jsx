export default function ProjectAdding({handleAdding,titleRef,descriptionRef,dueDateRef,handleSavingInput}) {
    return (
      <div className="w-[35rem] mb-[40vh] mr-[100vh]">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button className="text-stone-800 hover:text-stone-950" onClick={handleAdding}>Cancel</button>
          </li>
          <li>
            <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950" onClick={handleSavingInput}>Save</button>
          </li>
        </menu>
        <div>
          <p className="flex flex-col gap-1 my-4">
            <label className="text-sm font-bold uppercase text-stone-500">Title</label>
            <input className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" type="text" 
            ref={titleRef}/>
          </p>
          <p className="flex flex-col gap-1 my-4">
            <label className="text-sm font-bold uppercase text-stone-500">Description</label>
            <textarea className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600"
            ref={descriptionRef}></textarea>
          </p>
          <p className="flex flex-col gap-1 my-4">
            <label className="text-sm font-bold uppercase text-stone-500">Due Date</label>
            <input className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" type="date" 
            ref={dueDateRef}/>
          </p>
        </div>
      </div>
    );
  }
  