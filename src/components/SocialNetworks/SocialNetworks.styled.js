import styled from 'styled-components';
import { UIFlex } from '../UI/Flex.styled';

export const Container = styled(UIFlex)`
  position: absolute;
  bottom: 32px;
  margin-top: 48px;

  @media (max-width: 1024px) {
    position: relative;
    bottom: 0;
    margin-top: 24px;
  }
`;
