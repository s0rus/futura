import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 16px;
`;

export const MessageboardListItems = styled.ul`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  row-gap: 8px;
  column-gap: 8px;
`;
