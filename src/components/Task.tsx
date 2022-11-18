import { CheckBox, DeleteButton, TaskContainer, TaskText } from "./Task.styles";
import { Trash } from 'phosphor-react';
import check from '../assets/check.svg';
import checkSelected from '../assets/check_selected.svg';

interface TaskProps{
  idTask: string,
  content: string,
  isCompleted: boolean,
  onCheckBoxClick: (idTaskSelected: string) => void,
  onDelete: (idTaskSelected: string) => void,
}

export function Task({
  idTask,
  content,
  isCompleted,
  onCheckBoxClick,
  onDelete
}: TaskProps) {
  function deleteTask() {
    onDelete(idTask);
  }
  return (
    <TaskContainer>
      <CheckBox onClick={() => onCheckBoxClick(idTask)} >
        <img src={ isCompleted ? checkSelected : check } alt="" />
      </CheckBox>
      <TaskText>
        {content}
      </TaskText>
      <DeleteButton onClick={deleteTask} ><Trash size={20} /></DeleteButton>
    </TaskContainer>
  );
}