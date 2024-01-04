import React from 'react'

function ToDoList_V1() {
  return (
    <div>
      <h1 class = "flex justify-center mx-auto text-3xl font-bold">TO-DO</h1>
      <div class = "flex justify-center mt-4 space-x-8">
        <input class="bg-slate-50 px-4 py-2 outline-none border-2 border-blue-100 rounded-lg" placeholder="Type a task" />
        <input class = "bg-slate-50 px-4 py-2 outline-none border-2 border-blue-100 rounded-lg" type="date" name="" id="" />
        <button class="bg-green-400 px-3 py-[2px] rounded-lg text-white hover:text-black hover:bg-inherit hover:border-green-400 hover:border-2 font-medium">Add</button>
      </div>
    </div>
  )
}

export default ToDoList_V1;
