import { useState } from "react";
import { useRef } from "react";

export default function Project({title,description,dueDate,handleDelete,indexOFElement}) {
  const [arrayOfTasks, setArrayOfTasks] = useState([]);
  const getValues = useRef();
  function handleTasks() {
    const newTask = getValues.current.value;
    if (newTask.trim() !== "") {
      setArrayOfTasks((prevTasks) => [...prevTasks, newTask]);
      getValues.current.value = ""; // Clear input after adding
    }
  }

  function handleClearTask(index) {
    setArrayOfTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  }
  return (
    <div className="w-[35rem] mb-[40vh] mr-[100vh]">
      {/* Header Section */}
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">{title}</h1>
          <button className="text-stone-600 hover:text-stone-950" onClick={handleDelete(indexOFElement)}>
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{dueDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">{description}</p>
      </header>

      {/* Tasks Section */}
      <section>
        <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
        <div className="flex items-center gap-4">
          <input
            type="text"
            className="w-64 px-2 py-1 rounded-sm bg-stone-200"
            ref={getValues}
          />
          <button className="text-stone-700 hover:text-stone-950" onClick={handleTasks}>
            Add Task
          </button>
        </div>
        {arrayOfTasks.length==0 && <p className="text-stone-800 my-4">
          This project does not have any tasks yet.
        </p>}

     { arrayOfTasks.length!=0 && <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {arrayOfTasks.map((task, index) => (
            <li key={index} className="flex justify-between my-4">
              <span>{task}</span>
              <button
                className="text-stone-700 hover:text-red-500"
                onClick={() => handleClearTask(index)}
              >
                Clear
              </button>
            </li>
          ))}
        </ul>}
      </section>
    </div>
  );
}
