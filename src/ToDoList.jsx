import { useState } from "react"

import React from 'react'

const ToDoList = () => {

    const [task ,settask]=useState([]);
    const [newtask , setnewtask]=useState("");

    function handelinput(event){
        setnewtask(event.target.value);

    }
    function addtask(){
        if (newtask.trim() !== "") {
           settask(t => [...t,newtask]);
           setnewtask(""); 
        }
        

    }
    function deltask(index){
        const updatedtask = task.filter((_,i)=> i !== index);
        settask(updatedtask);

    }
    function moveup(index) {
        if (index > 0) {
          const updatedtask = [...task]; // Changed 'tasks' to 'task'
          // Fix the array swap syntax
          [updatedtask[index], updatedtask[index - 1]] = [updatedtask[index - 1], updatedtask[index]];
          settask(updatedtask);
        }
      }
      
      function movedown(index) {
        if (index < task.length - 1) {
          const updatedtask = [...task]; // Added missing array spread
          // Fix the array swap syntax
          [updatedtask[index], updatedtask[index + 1]] = [updatedtask[index + 1], updatedtask[index]];
          settask(updatedtask);
        }
      }
      
   

  return (
  <div className="Todolist">
    <h1>To-Do-List</h1>

    <div>
        <input type="text"
         placeholder="Enter your task"
         value={newtask}
         onChange={handelinput}/>
    </div>
    <button 
    className="add-btn"
    onClick={addtask}>
        Add
    </button>
    
    <ol>
      {task.map((task, index) => 
        <li key={index}><span className="text">{task}</span> 
        <button className="delete-btn" onClick={() =>deltask(index)}>Delete</button>
        <button className="moveup-btn" onClick={() =>moveup(index)}>👆</button>
        <button className="movedown-btn" onClick={() =>movedown(index)}>👇</button>
          
        </li>
      )}
    </ol>


  </div>
    
  )
}

export default ToDoList
