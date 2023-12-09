import styled from 'styled-components';

export const AppContainer = styled.div`
  background-color: #0f172a;
  color: #fff;
`;

export const Main = styled.div`
  display: flex;
  max-width: 1280px;
  margin: 0 auto;
  min-height: 100dvh;
  gap: 16px;
  padding: 96px 0;

  @media (min-width: 1024px) {
    padding-left: 6rem;
    padding-right: 6rem;
  }
`;
