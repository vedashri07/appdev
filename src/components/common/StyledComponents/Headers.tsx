import styled, { css } from 'styled-components'

export const PageHeader = styled.div`  
  display: flex;
  align-items: center;
  justify-content: space-between; 
  margin-bottom: 48px;
  
  @media (max-width: 768px) {
    margin-bottom: 32px;
  }
`;
