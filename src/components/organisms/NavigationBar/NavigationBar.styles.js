import styled from 'styled-components';

export const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    path {
      fill: ${({ theme: { colors } }) => colors.primary};
    }
  }
`;

export const Logo = styled.h1`
  font-family: 'Asset', cursive;
`;

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;

  a {
    &::before {
      content: '';
      position: absolute;
      top: 80%;
      left: 0;

      width: 0%;
      height: 2px;
      background-color: ${({ theme: { colors } }) => colors.primary};
      transition: width 0.2s;
    }

    &:hover::before {
      width: 100%;
    }
  }
`;
