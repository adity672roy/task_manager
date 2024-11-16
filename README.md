# Task Manager Application



## 1. Application and Functionality

The **Task Manager Application** is a React-based task management tool designed to help users organize and prioritize tasks efficiently. The application includes the following features:

- **Add Tasks**: Users can add tasks with a title and assign a priority (High, Medium, Low).
- **Edit Tasks**: Update task details, including priority.
- **Delete Tasks**: Remove tasks from the list.
- **Search Tasks**: Search for tasks by title using a search bar.
- **Mark as Completed**: Mark tasks as completed, striking them through and fading them.
- **Priority-Based Columns**: Tasks are automatically sorted into High, Medium, and Low priority columns.
- **Sort Tasks**: Sort tasks by title, priority, or completion status.
- **Local Storage**: All tasks are saved in the browser's local storage, ensuring persistence across sessions.
- **Responsive Design**: Fully responsive layout for desktop and mobile devices.
- **Enhanced UI**: Includes animations and color-coded task prioritization for better usability.



## 2. Setup and Launch Process

### Prerequisites
Ensure you have the following installed:
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/task_manager.git 
   cd task_manager

2. Install dependencies:

        ```bash
        npm install
        # or
        yarn install


3. Start the development server:

    ```bash 
    npm start
    # or
    yarn start

Open your browser and navigate to http://localhost:5173.




## 3. Assumptions Made During Development

- **Priority Levels**: Tasks have three predefined priority levels: High, Medium, and Low.
- **Unique Task Titles**: It is assumed that task titles are unique for simpler search functionality.
- **Local Storage**: The application persists tasks in local storage. If local storage is cleared, all tasks will be lost.
- **Sorting Logic**: Tasks are sorted alphabetically by title, and this behavior may not align with all user preferences.
- **Responsive Design**: The application layout is designed to be responsive, but fine-tuning for all screen sizes may require additional testing.
- **Animations**: CSS animations are minimal and focus on tasks.



## 4. Screenshots

### Main View
![Task Manager Main View](https://github.com/adity672roy/task_manager/blob/master/src/assets/Main_view.png)

### Adding a Task
![Adding a Task](https://github.com/adity672roy/task_manager/blob/master/src/assets/Add_task.png)

### Editing a Task
![Editing a Task](https://github.com/adity672roy/task_manager/blob/master/src/assets/Edit_task.png)

### Sorting Tasks
![Sorting Tasks](https://github.com/adity672roy/task_manager/blob/master/src/assets/Sort_tasks.png)

### Responsive Design (Mobile)
![Responsive Design](https://github.com/adity672roy/task_manager/blob/master/src/assets/View.png)
![Responsive Design](https://github.com/adity672roy/task_manager/blob/master/src/assets/View2.png)
