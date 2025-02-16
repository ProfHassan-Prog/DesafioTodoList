import React, { FC, ChangeEvent, useState } from 'react';
import './App.css'; // Importa o arquivo de estilos para deixar a página bonita
import { ITask } from './interfaces'; // Importa um tipo de dado chamado ITask (provavelmente definido em outro arquivo)
import TodoTask from './Components/TodoTask'; // Importa o componente TodoTask que será usado para mostrar cada tarefa

const App: FC = () => { // Aqui começa o componente principal chamado App
  
  // Criamos três variáveis para guardar informações sobre as tarefas
  const [task, setTask] = useState<string>(""); // task é o nome da tarefa
  const [deadline, setDeadline] = useState<number>(0); // deadline é o prazo para fazer a tarefa
  const [todoList, setTodoList] = useState<ITask[]>([]); // todoList é a lista que vai guardar todas as tarefas

  // Esta função é chamada quando o usuário escreve algo nos campos de entrada
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") { // Se o nome do campo for "task", atualizamos o nome da tarefa
      setTask(event.target.value);
    } else { // Senão, significa que o campo é "deadline", então atualizamos o prazo
      setDeadline(Number(event.target.value)); // Convertendo para número
    }
  };

  // Esta função adiciona uma nova tarefa à lista de tarefas
  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline }; // Criamos um objeto com os dados da nova tarefa
    setTodoList([...todoList, newTask]); // Adicionamos a nova tarefa à lista de tarefas
    setTask(""); // Limpamos o campo do nome da tarefa
    setDeadline(0); // Limpamos o campo do prazo
  };

  // Esta função remove uma tarefa da lista quando o usuário clica para completá-la
  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(todoList.filter((task) => {
      return task.taskName !== taskNameToDelete; // Mantemos apenas as tarefas que NÃO têm o nome da tarefa a ser deletada
    }));
  };
  
  return (
    <div className="App">
      {/* Cabeçalho onde o usuário pode adicionar tarefas */}
      <div className='header'>
        <div className='inputContainer'>
          {/* Campo para digitar o nome da tarefa */}
          <input 
            type="text" 
            name="task" 
            value={task} 
            placeholder='Tarefa' 
            onChange={handleChange} 
          />
          {/* Campo para digitar o prazo */}
          <input 
            type="number" 
            name="deadline" 
            value={deadline} 
            placeholder='Dias para fazer a tarefa' 
            onChange={handleChange} 
          />
        </div>
        {/* Botão que adiciona a tarefa quando clicado */}
        <button onClick={addTask}>Adicionar Tarefa</button>
      </div>
      
      {/* Lista de tarefas */}
      <div className="todoList">
        {todoList.map((task: ITask, key: number) => {
          return (
            <TodoTask key={key} task={task} completeTask={completeTask} /> // Mostramos cada tarefa usando o componente TodoTask
          );
        })}
      </div>
    </div>
  );
};

export default App; // Exportamos o componente para ser usado em outro lugar