import React, { useState } from 'react';

function TaskInput({ onAddTask }) {
    const [taskTitle, setTaskTitle] = useState("");
    const [priority, setPriority] = useState("Medium");

    const handleAddTask = () => {
        if (taskTitle.trim()) {
            onAddTask({ title: taskTitle, priority });
            setTaskTitle("");
            setPriority("Medium");
        }
    };

    return (
        <div>
            <input 
                type="text" 
                placeholder="Add a new task" 
                value={taskTitle} 
                onChange={(e) => setTaskTitle(e.target.value)} 
            />
            <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
            <button onClick={handleAddTask}>Add Task</button>
        </div>
    );
}

export default TaskInput;
