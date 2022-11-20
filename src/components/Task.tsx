import { CheckBox, DeleteButton, TaskContainer, TaskText } from "./Task.styles";
import { Trash } from 'phosphor-react';
import check from '../assets/check.svg';
import checkSelected from '../assets/check_selected.svg';
import { TaskAttributes } from "./ToDoList";
interface TaskProps{
  task: TaskAttributes,
  onCheckBoxClick: (idTaskSelected: string) => void,
  onDelete: (idTaskSelected: string) => void,
}

export function Task({
  task: {
    id,
    content,
    isCompleted
  },
  onCheckBoxClick,
  onDelete
}: TaskProps) {
  function deleteTask() {
    onDelete(id);
  }
  return (
    <TaskContainer>
      <CheckBox onClick={() => onCheckBoxClick(id)} >
        <img src={ isCompleted ? checkSelected : check } alt="" />
      </CheckBox>
      <TaskText isCompleted={isCompleted}>
        {content}
      </TaskText>
      <DeleteButton onClick={deleteTask} ><Trash size={20} /></DeleteButton>
    </TaskContainer>
  );
}