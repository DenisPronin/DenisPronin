import AnchorLink from 'react-anchor-link-smooth-scroll';

export function TableOfContentLink({ anchor, name }) {
  return <AnchorLink href={`#${anchor}`}>{name}</AnchorLink>;
}
