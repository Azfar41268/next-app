'use client';
import { Dispatch, SetStateAction, useState } from "react";


export default function List(children: {todos: string[], setTodos: Dispatch<SetStateAction<string[]>>}) {
    const [todo, setTodo] = useState("")
    return(
        <div className="flex flex-col justify-between items-center px-5 py-8 border-1 bg-white/30 rounded-md w-11/12 xl:w-5/12 h-[80vh] text-center gap-100">
            <h1 className="text-3xl font-bold">
            Todo List
            </h1>
            <div className="flex flex-col justify-between items-center h-[100vh] w-9/12 xl:w-7/12 overflow-y-scroll">
            <ul className="flex flex-col justify-between items-center gap-4 p-4 w-full">
                {children.todos.map((item, index) => (
                <li key={index} className="p-5 flex justify-around items-center gap-5 font-semibold bg-white/40 border-1 rounded-md cursor-pointer hover:scale-105 duration-150 w-full">
                    <h1 className="text-xl">
                        {item}
                    </h1>
                    <button className="text-lg bg-red-500 text-white p-3 border-1 border-red-500 rounded-md hover:text-red-500 hover:scale-105 hover:bg-white hover:border-white active:scale-95 duration-200" onClick={() => children.setTodos(to => to.filter(index => item !== index))}>
                        Remove
                    </button>
                </li>
                ))}
            </ul>
            </div>
            <div className="flex gap-3">
                <input className="px-4 py-2 rounded-full" type="text" placeholder="Enter a task" value={todo} onChange={e => setTodo(e.target.value)} />
                <button className="rounded-full px-4 py-2 text-lg font-semibold text-white bg-blue-500 hover:bg-white hover:text-blue-500 hover:scale-105 duration-200" onClick={() => children.setTodos(t => [...t, todo])}>
                    Submit
                </button>
            </div>
        </div>
    );
}