import styled from 'styled-components';

export const AppContainer = styled.div`
  background-color: #111d3f;
  color: #fff;
`;

export const Main = styled.div`
  display: flex;
  max-width: 1280px;
  margin: 0 auto;
  gap: 16px;

  @media (min-width: 1024px) {
    padding-left: 6rem;
    padding-right: 6rem;
  }
`;
