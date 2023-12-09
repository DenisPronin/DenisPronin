import styled from 'styled-components';
import { Colors, ColorsOpacity } from '../../variables/colors';
import { Text } from '../UI/Text';

export const ItemContainer = styled.div`
  gap: 16px;
  display: flex;
`;

export const DateColumn = styled(Text)`
  flex: 0 0 120px;
`;

export const DescriptionList = styled.ul`
  color: ${Colors.GREY2};
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;
`;

export const SkillTag = styled.div`
  background: ${ColorsOpacity.MINT2_10};
  border-radius: 9999px;
  color: ${Colors.MINT};
  display: flex;
  font-size: 12px;
  line-height: 20px;
  align-items: center;
  padding: 4px 12px;
`;
