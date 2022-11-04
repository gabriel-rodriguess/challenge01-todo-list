import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 46rem;
  margin: auto;
`;

export const NewTaskForm = styled.form`
  display: flex;
  gap: 8px;
  height: 3.375rem;
  width: 100%;
`;

export const NewTaskInput = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  gap: 8px;

  border-radius: 8px;
  width: 100%;
  background: ${props => props.theme.gray500};
  border: 1px solid ${props => props.theme.gray700};

  flex: none;
  order: 0;
  flex-grow: 1;
`;

export const NewTaskButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  gap: 8px;

  width: 5.625rem;
  height: 3.25rem;

  background: ${props => props.theme.blueDark};
  border-radius: 8px;

  flex: none;
  order: 1;
  flex-grow: 0;

  color: ${props => props.theme.gray100};
`;

export const TaskHeader = styled.header`
  display: flex;
  justify-content: space-between;

  width: 100%;
  height: 1.1875rem;
`;

export const InfoText = styled.b`
  color: ${props => props.theme.blue};
`;