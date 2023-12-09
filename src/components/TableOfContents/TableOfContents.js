import { UIFlex } from '../UI/Flex.styled';
import { TableOfContentLink } from './TableOfContentLink';

export function TableOfContents() {
  return (
    <UIFlex direction='column' gap={16} mt={64}>
      <TableOfContentLink anchor='about' name='About' />
      <TableOfContentLink anchor='about' name='Skills' />
      <TableOfContentLink anchor='about' name='Experience' />
    </UIFlex>
  );
}
