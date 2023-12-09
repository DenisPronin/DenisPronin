import styled from 'styled-components';
import { Colors } from '../../variables/colors';
import { UIBox } from '../UI/Box.styled';

export const Container = styled.div`
  color: ${Colors.GREY};
`;

export const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  line-height: 1;
`;

export const SubTitle = styled(UIBox)`
  font-size: 20px;
  font-weight: 500;
  line-height: 1.75rem;
`;
