"use client";
import List from "@/components/TodoList";
import { useState } from "react";

export default function App() {
  const todoList = ["Hello", "Create", "Practice", "Repeat"]
  const [todos, setTodos] = useState(todoList)

  return (
    <div className="flex justify-center items-center h-[100vh] bg-gradient-to-br from-red-600 to-purple-600">
      <List todos={todos} setTodos={setTodos} />  
    </div>
  );
}