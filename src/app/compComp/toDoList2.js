/* import React, { useState} from "react";

export default function todoList2(){
    const [tasks, setTasks] = useState([]);
    const [input, setInput] = useState("");
//add new task 1 
    const addTask = () => {
        if(input.trim() === "") return

        const newTask = {
            id: Date.now(),
            text: input,
            completed: false
        };

        setTasks(prev => [...prev, newTask]);
        setInput("");
    };

    //toggle completed 2 
    const toggleTask = (id) => {
        setTasks(prev =>
            prev.map(tasks =>
                tasks.id === id 
                ? { ...task, completed: !task.completed}
                : task 
            )
        );
    };

    //delete a task 3 
    const deleteTask = (id) => {
        setTasks(prev => prev.filter(task => task.id !== id)); //??????? what de fok is diss?
    };

} */