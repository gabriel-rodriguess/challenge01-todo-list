import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 46rem;
  margin: -1.687rem auto;
`;

export const NewTaskForm = styled.form`
  display: flex;
  gap: 8px;
  height: 3.375rem;
  width: 100%;

  margin-bottom: 4rem; 
`;

export const NewTaskInput = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  gap: 8px;

  border-radius: 8px;
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
  gap: 4px;

  width: 5.625rem;
  height: 3.25rem;

  background: ${props => props.theme.blueDark};
  border-radius: 8px;
  border: 0px solid;

  color: ${props => props.theme.gray100};
`;

export const TaskHeader = styled.header`
  display: flex;
  justify-content: space-between;

  width: 100%;
  height: 1.1875rem;

  margin-bottom: 1.5rem;
`;

interface InfoTextProps {
  secondaryColor?: boolean
}

export const InfoText = styled.div<InfoTextProps>`
  color: ${props => props.secondaryColor ? props.theme.purple : props.theme.blue};
  display: flex;
  font-weight: 700;
`;

export const InfoCounter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 1.1875rem;
  padding: 2px 8px;
  color: ${props => props.theme.gray200};

  font-size: 0.875rem;
  font-weight: 700;  


  background:  ${props => props.theme.gray400}; 
  border-radius: 999px;
`;

export const HeaderSide = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const ToDoListContainer = styled.section`
  width: 100%;
  
  > * {
    margin-bottom: 12px;
  }
`;