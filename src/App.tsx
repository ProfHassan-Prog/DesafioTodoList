import React, { FC, ChangeEvent, useState } from 'react';
import './App.css';
import { ITask } from './interfaces';
import TodoTask from './Components/TodoTask';

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline, completed: false };
    setTodoList([...todoList, newTask]);
    setTask("");
    setDeadline(0);
  };

  const toggleCompleteTask = (taskNameToToggle: string): void => {
    setTodoList(todoList.map((task) =>
      task.taskName === taskNameToToggle ? { ...task, completed: !task.completed } : task
    ));
  };

  const removeTask = (taskNameToRemove: string): void => {
    setTodoList(todoList.filter(task => task.taskName !== taskNameToRemove));
  };
  
  return (
    <div className="App">
      <div className='header'>
        <div className='inputContainer'>
          <input 
            type="text" 
            name="task" 
            value={task} 
            placeholder='Tarefa' 
            onChange={handleChange} 
          />
          <input 
            type="number" 
            name="deadline" 
            value={deadline} 
            placeholder='Dias para fazer a tarefa' 
            onChange={handleChange} 
          />
        </div>
        <button onClick={addTask}>Adicionar Tarefa</button>
      </div>
      
      <div className="todoList">
        {todoList.map((task: ITask, key: number) => {
          return (
            <TodoTask key={key} task={task} toggleCompleteTask={toggleCompleteTask} removeTask={removeTask} />
          );
        })}
      </div>
    </div>
  );
};

export default App;