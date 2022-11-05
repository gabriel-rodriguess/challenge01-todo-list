import { CheckBox, DeleteButton, TaskContainer, TaskText } from "./Task.styles";
import { Trash } from 'phosphor-react';
import check from '../assets/check.svg';
import checkSelected from '../assets/check_selected.svg';

interface TaskProps{
  idTask: number,
  content: string,
  isCompleted: boolean,
  onCheckBoxClick: (idTaskSelected: number) => {},
  onTaskDeleted?: () => {},
}

export function Task({
  idTask,
  content,
  isCompleted,
  onCheckBoxClick,
  onTaskDeleted
}: TaskProps) {
  return (
    <TaskContainer>
      <CheckBox onClick={() => onCheckBoxClick(idTask)} >
        <img src={ isCompleted ? checkSelected : check } alt="" />
      </CheckBox>
      <TaskText>
        {content}
      </TaskText>
      <DeleteButton onClick={onTaskDeleted} ><Trash size={20} /></DeleteButton>
    </TaskContainer>
  );
}