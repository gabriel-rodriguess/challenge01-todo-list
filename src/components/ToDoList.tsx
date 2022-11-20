import React, { FormEvent, useState, InvalidEvent } from 'react';
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
export interface TaskAttributes {
  id: string,
  content: string,
  isCompleted: boolean,
}

export function ToDoList() {
  const [newTaskContent, setNewTaskContent] = useState("");
  const [taskList, setTaskList] = useState<TaskAttributes[]>([]);
  const [completedTasks, setCompletedTasks] = useState(0);

  function handleTaskSelected(idTaskSelected: string) {
    const newTaskList = taskList.map(task => task.id === idTaskSelected ? { ...task, isCompleted: !task.isCompleted} : task);
    setTaskList(newTaskList);
    
    const sumCompletedTasks = newTaskList.reduce((cont, taskCurr) => {
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
    setNewTaskContent('');
  }

  function handleDeleteTask(idTaskSelected: string) {
    const newTaskList = taskList.filter(task => task.id !== idTaskSelected);
    setTaskList(newTaskList);
    
    const sumCompletedTasks = newTaskList.reduce((cont, taskCurr) => {
      const contCurr = taskCurr.isCompleted ? 1 : 0;
      return cont + contCurr;
    }, 0);
    setCompletedTasks(sumCompletedTasks);
  }

  function handleNewTaskInvalid (event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Este campo é obrigatório!');
  }

  return (
    <MainContainer>
      <NewTaskForm
        onSubmit={handleCreateTask}
      >
        <NewTaskInput
          value={newTaskContent}
          placeholder='Adicione uma nova tarefa'
          onChange={event => {
            event.target.setCustomValidity('');
            setNewTaskContent(event.target.value);
          }}
          onInvalid={handleNewTaskInvalid}
          required
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
          const { id } = task;
          return <Task 
            key={id}
            task={task}
            onCheckBoxClick={handleTaskSelected}
            onDelete={handleDeleteTask}
          />
        })}

      </ToDoListContainer>
    </MainContainer>
  );
}