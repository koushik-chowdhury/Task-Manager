import React, { useState, useEffect } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import SearchBar from './components/SearchBar';
import './App.css';
import "./style.css";

function App() {
    const [tasks, setTasks] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks'));
        if (storedTasks) setTasks(storedTasks);
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (task) => {
        const newTask = { id: Date.now(), ...task, completed: false };
        setTasks([...tasks, newTask]);
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    const toggleComplete = (id) => {
        setTasks(tasks.map((task) => 
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    const filteredTasks = tasks.filter((task) =>
        task.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sortTasks = (criteria) => {
        const sortedTasks = [...tasks].sort((a, b) => {
            if (criteria === "priority") {
                const priorityOrder = { High: 1, Medium: 2, Low: 3 };
                return priorityOrder[a.priority] - priorityOrder[b.priority];
            }
            if (criteria === "completion") return a.completed - b.completed;
            return 0;
        });
        setTasks(sortedTasks);
    };

    return (
        <div>
            <h1>Task Manager</h1>
            <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
            <button onClick={() => sortTasks("priority")}>Sort by Priority</button>
            <button onClick={() => sortTasks("completion")}>Sort by Completion</button>
            <TaskInput onAddTask={addTask} />
            <TaskList tasks={filteredTasks} onDeleteTask={deleteTask} onToggleComplete={toggleComplete} />
        </div>
    );
}

export default App;
