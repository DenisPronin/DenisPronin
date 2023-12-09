import styled from 'styled-components';

export const Container = styled.div`
  padding: 96px 0 0;
  position: sticky;
  top: 0;
  width: 50%;
  max-height: 100vh;

  @media (max-width: 1024px) {
    background-color: #111d3f;
    z-index: 1;
    padding: 96px 16px 16px;
    width: 100%;
  }
`;
