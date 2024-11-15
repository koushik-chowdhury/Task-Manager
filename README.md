# Task Manager

A simple Task Manager application built with React and JavaScript, allowing users to create, manage, and organize tasks effectively. This app persists task data using local storage, so your tasks remain available even after a page refresh.

## Features

### Basic Features
1. **Add Task**: Add tasks with a title to keep track of things to do.
2. **Delete Task**: Remove tasks from the list as needed.
3. **Persistent Storage**: Saves tasks to local storage, so data persists between page reloads.

### Stretch Features
1. **Search Tasks**: Quickly find tasks using a search bar.
2. **Mark Completion**: Mark tasks as completed and toggle their status.
3. **Priority Levels**: Set priority levels for tasks to organize based on urgency.
4. **Sort Tasks**: Sort tasks by different criteria (e.g., date added, priority).
5. **Animations**: Improve the user experience with smooth animations in the interface.

## Tech Stack

- **Frontend**: React, JavaScript
- **Storage**: Local Storage

## Getting Started

### Prerequisites
- Node.js and npm installed on your system.

### Setup

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/koushik-chowdhury/Task-Manager.git
    cd task-manager
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Start the Application**:
    ```bash
    npm start
    ```

4. Open the app in your browser at `http://localhost:3000`.

## Project Structure

```plaintext
src
├── components
│   ├── TaskInput.js         # Component to handle task input
│   ├── TaskList.js          # Component to display list of tasks
│   └── TaskItem.js          # Component to display individual task with actions
├── App.js                   # Main app component
└── index.js                 # Entry point
```

## Screenshot of the Project
1. **Interface**
![Project Image](/projectScreenShot/1.png)

2. **Adding Task**
![Project Image](/projectScreenShot/2.png)

3. **Searching Task**
![Project Image](/projectScreenShot/3.png)

4. **Mark as Complete**
![Project Image](/projectScreenShot/4.png)

5. **Deleting Task**
![Project Image](/projectScreenShot/5.png)



