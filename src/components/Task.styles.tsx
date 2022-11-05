import styled from "styled-components";

export const TaskContainer = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 16px;
  gap: 12px;

  height: 4.5rem;

  background: ${props => props.theme.gray500};

  border: 1px solid ${props => props.theme.gray400};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
  border-radius: 8px;

  :hover {
    box-shadow: rgb(94, 96, 206, 0.4) 0px 0px 10px;
    
  }
`;

export const CheckBox = styled.button`
  padding: 0;
  margin: 0;

  background: transparent;
  border: 0;

  :hover {
    cursor: pointer;
  }
`;

export const TaskText = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;

  color: ${props => props.theme.gray100};

  width: 100%;
`;

export const DeleteButton = styled.button`
  background: transparent;
  border: 0px;
  color: ${props => props.theme.gray300};

  :hover {
    cursor: pointer;
    color: ${props => props.theme.danger};
  }

`; 

