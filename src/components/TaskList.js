import React from 'react';

function TaskList({ tasks, onDeleteTask, onToggleComplete }) {
    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                    <input 
                        type="checkbox" 
                        checked={task.completed} 
                        onChange={() => onToggleComplete(task.id)} 
                    />
                    {task.title} - Priority: {task.priority}
                    <button onClick={() => onDeleteTask(task.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
}

export default TaskList;
