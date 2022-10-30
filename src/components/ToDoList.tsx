import React from 'react';
import { MainContainer, NewTaskForm, NewTaskInput } from './ToDoList.styles';

export function ToDoList() {

  return (
    <MainContainer>
      <NewTaskForm>
        <NewTaskInput
          placeholder='Adicione uma nova tarefa'
        />
        <button>Criar</button>
      </NewTaskForm>
      <header>
        <b>Tarefas Criadas 5</b>
        <b>Concluídas 2 de 5</b>
      </header>
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