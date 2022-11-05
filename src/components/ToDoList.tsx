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

interface TaskAttributes {
  id: number,
  content: string,
  isCompleted: boolean,
}

export function ToDoList() {
  const [newTaskContent, setNewTaskContent] = useState("");
  const [taskList, setTaskList] = useState<TaskAttributes[]>([]);

  function handleTaskSelected(idTaskSelected: number) {
    setTaskList(state => state.map(task => task.id === idTaskSelected ? { ...task, isCompleted: !task.isCompleted} : task));
  }

  function handleCreateTask(event: FormEvent) {
    event.preventDefault();
    const newTask = {
      id: 1231,
      content: newTaskContent,
      isCompleted: false,
    };
    setTaskList(state => [...state, newTask]);
  }

  function handleDeleteTask() {

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
          <InfoText>Tarefas Criadas</InfoText><InfoCounter>5</InfoCounter>
        </HeaderSide>

        <HeaderSide>
          <InfoText secondaryColor>Concluídas</InfoText><InfoCounter>2 de 5</InfoCounter>
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
          />
        })}

      </ToDoListContainer>
    </MainContainer>
  );
}