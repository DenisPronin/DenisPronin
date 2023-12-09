import { IconContainer } from './Icon.styled';
import icons from './icons';

export const Icon = ({ name, ...boxProps }) => {
  const IconComponent = icons[name];

  if (!IconComponent) {
    return null;
  }

  return (
    <IconContainer {...boxProps}>
      <IconComponent />
    </IconContainer>
  );
};
