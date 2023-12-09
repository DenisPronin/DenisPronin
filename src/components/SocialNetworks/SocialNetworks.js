import { Icon } from '../Icon/Icon';
import { Container } from './SocialNetworks.styled';

export function SocialNetworks() {
  return (
    <Container gap={20}>
      <a href='https://github.com/DenisPronin' target='_blank' rel='noreferrer'>
        <Icon name='github' h={24} />
      </a>
      <a href='https://www.linkedin.com/in/denis-pronin-frontend/' target='_blank' rel='noreferrer'>
        <Icon name='linkedin' h={24} />
      </a>
    </Container>
  );
}
