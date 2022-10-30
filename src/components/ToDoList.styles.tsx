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
`;

export const NewTaskInput = styled.input`
  border-radius: 8px;
  width: 100%;
`;