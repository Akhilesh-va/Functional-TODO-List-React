import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setmainTask] = useState([]);

  
  const submitHandler = (e) => {
    e.preventDefault();
    // This is a default method to prevent a form from submition and it is not recommended in the suggestions to wite as it is
    setmainTask([...mainTask,{title,desc}])
    setTitle("");
    setDesc("");
    console.log(mainTask);
    
  };
  const deleteHandler = (i)=>{
    let copyTask = [...mainTask]
    copyTask.splice(i,1);
    setmainTask(copyTask);
  }
  let renderTask = <h2>No Task Avilable</h2>
  if(mainTask.length>0){
  renderTask=mainTask.map((t,i)=>{
    return (
      <li key={i} className="flex items-center mb-8 justify-between">
        <div className="flex items-center justify-between  w-2/3">
          <h5 className="text-2xl font-semibold">{t.title}</h5>
          <h6 className="text-lg font-medium">{t.desc}</h6>
        </div>
        <button onClick={()=>{
          deleteHandler(i)
        }} 
         className="bg-red-400 text-white rounded font-bold p-1">
          Delete
        </button>
      </li>
    );
  })}
  return (
    <>
      <div className="bg-black text-white p-5  font-bold text-center flex justify-center">
        <h1 className=" text-center text-5xl">Make Your Day Better</h1>
        <p className=" mt-7 ml-5">Todo List</p>
      </div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="text-2xl border-zinc-800 border-2 m-5 px-4 py-2 "
          placeholder="Enter Title Here"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          className="text-2xl border-zinc-800 border-2 m-5 px-4 py-2 "
          placeholder="Enter Description Here"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
        <button className="bg-black text-white px-6 py-2 text-2xl font-bold rounded m-5">
          Add Task
        </button>
      </form>
      <hr />
      <div className="p-8 bg-slate-300">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
}

export default App;
