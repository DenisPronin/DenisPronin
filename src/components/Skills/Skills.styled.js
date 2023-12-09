import styled from 'styled-components';
import { UIFlex } from '../UI/Flex.styled';

export const Skill = styled(UIFlex)`
  flex-direction: row;
  gap: 4px;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;
