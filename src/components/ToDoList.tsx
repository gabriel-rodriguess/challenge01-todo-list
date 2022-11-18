import React, { FormEvent, useState } from 'react';
import { PlusCircle } from "phosphor-react";
import { Task } from './Task';
import {
  HeaderSide,
  InfoCounter,
  InfoText,
  MainContainer,
  NewTaskButton,
  NewTaskForm,
  NewTaskInput,
  TaskHeader,
  ToDoListContainer
} from './ToDoList.styles';

import { v4 as uuid } from 'uuid';
interface TaskAttributes {
  id: string,
  content: string,
  isCompleted: boolean,
}

export function ToDoList() {
  const [newTaskContent, setNewTaskContent] = useState("");
  const [taskList, setTaskList] = useState<TaskAttributes[]>([]);
  const [completedTasks, setCompletedTasks] = useState(0);

  function handleTaskSelected(idTaskSelected: string) {
    setTaskList(state => state.map(task => task.id === idTaskSelected ? { ...task, isCompleted: !task.isCompleted} : task));
    const sumCompletedTasks = taskList.reduce((cont, taskCurr) => {
      const contCurr = taskCurr.isCompleted ? 1 : 0;
      return cont + contCurr;
    }, 0);
    setCompletedTasks(sumCompletedTasks);
  }

  function handleCreateTask(event: FormEvent) {
    event.preventDefault();
    const newTask = {
      id: uuid(),
      content: newTaskContent,
      isCompleted: false,
    };
    setTaskList(state => [...state, newTask]);
  }

  function handleDeleteTask(idTaskSelected: string) {
    setTaskList(state => state.filter(task => task.id !== idTaskSelected ));
  }

  return (
    <MainContainer>
      <NewTaskForm
        onSubmit={handleCreateTask}
      >
        <NewTaskInput
          placeholder='Adicione uma nova tarefa'
          onChange={event => setNewTaskContent(event.target.value)}
        />
        <NewTaskButton>Criar <PlusCircle size={20} /></NewTaskButton>
      </NewTaskForm>

      <TaskHeader>
        <HeaderSide>
          <InfoText>Tarefas Criadas</InfoText><InfoCounter>{taskList.length}</InfoCounter>
        </HeaderSide>

        <HeaderSide>
          <InfoText secondaryColor>Concluídas</InfoText><InfoCounter>{`${completedTasks} de ${taskList.length}`}</InfoCounter>
        </HeaderSide>
      </TaskHeader>

      <ToDoListContainer> 

        {taskList.map(task => {
          const { id, content, isCompleted} = task;
          return <Task 
            idTask={id}
            content={content}
            isCompleted={isCompleted}
            onCheckBoxClick={handleTaskSelected}
            onDelete={handleDeleteTask}
          />
        })}

      </ToDoListContainer>
    </MainContainer>
  );
}