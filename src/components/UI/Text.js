import { Colors } from '../../variables/colors';
import { UIText } from './Text.styled';

export function Text({ children, ...props }) {
  return (
    <UIText size={16} color={Colors.GREY2} {...props}>
      {children}
    </UIText>
  );
}
