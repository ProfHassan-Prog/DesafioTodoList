import React from "react";
import { ITask } from "../interfaces";

interface Props {
    task: ITask;
    toggleCompleteTask(taskNameToToggle: string): void;
    removeTask(taskNameToRemove: string): void;
}

const TodoTask = ({ task, toggleCompleteTask, removeTask }: Props) => {
    return (
        <div className="task">
            <div className="content" style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                <span>{task.taskName}</span>
                <span>{task.deadline}</span>
            </div>
            <button onClick={() => { toggleCompleteTask(task.taskName); }}>✔</button>
            <button onClick={() => { removeTask(task.taskName); }}>❌</button>
        </div>
    );
};

export default TodoTask;