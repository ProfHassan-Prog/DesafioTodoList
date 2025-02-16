import React from "react"; // Importamos o React para criar o componente
import { ITask } from "../interfaces"; // Importamos o tipo ITask que define como uma tarefa deve ser

// Criamos um tipo chamado Props que define as propriedades esperadas pelo componente
interface Props {
    task: ITask; // A tarefa que será mostrada
    completeTask(taskNameToDelete: string): void; // A função que apaga uma tarefa quando clicamos no botão
}

// Criamos o componente TodoTask que recebe uma tarefa e a função de completar tarefas
const TodoTask = ({ task, completeTask }: Props) => {
    return (
        <div className="task"> {/* Div que representa cada tarefa */}
            <div className="content"> {/* Div que contém as informações da tarefa */}
                <span>{task.taskName}</span> {/* Nome da tarefa */}
                <span>{task.deadline}</span> {/* Prazo da tarefa */}
            </div>
            {/* Botão que, ao ser clicado, remove a tarefa chamando a função completeTask */}
            <button onClick={() => { completeTask(task.taskName); }}>X</button>
        </div>
    );
};

export default TodoTask; // Exportamos o componente para ser usado em outro lugar
