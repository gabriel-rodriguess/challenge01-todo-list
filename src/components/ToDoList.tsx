import React from 'react';
import { InfoText, MainContainer, NewTaskButton, NewTaskForm, NewTaskInput, TaskHeader } from './ToDoList.styles';

export function ToDoList() {

  return (
    <MainContainer>
      <NewTaskForm>
        <NewTaskInput
          placeholder='Adicione uma nova tarefa'
        />
        <NewTaskButton>Criar</NewTaskButton>
      </NewTaskForm>
      <TaskHeader>
        <InfoText>Tarefas Criadas <b>5</b></InfoText>
        <InfoText>Concluídas <b>2 de 5</b></InfoText>
      </TaskHeader>
      <section>
        <article>
          <input type='checkbox'/>
          Any text!!
          <button>Delete</button>
        </article>

      </section>
    </MainContainer>
  );
}