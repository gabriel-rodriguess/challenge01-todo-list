import React from 'react';
import styled from 'styled-components';

import logo from '../assets/Logo.svg';

export function Header() {

  return (
    <HeaderContainer>
      <img src={logo} alt="To Do List logo" title="To Do List logo" />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 200px;
  background: ${props => props.theme.gray700}
`;