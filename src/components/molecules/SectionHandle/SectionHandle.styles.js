import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  button:not(:last-child) {
    margin-right: 8px;
  }
`;

export const Wrapper = styled.div`
  margin-top: 16px;
  padding: 8px 0;

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;
