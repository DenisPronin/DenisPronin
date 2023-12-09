import styled, { css } from 'styled-components';
import { cssInvariant } from '../../helpers/css';
import { UIBox } from './Box.styled';

export const UIFlex = styled(UIBox)`
  display: ${(props) => (props.inline ? 'inline-flex' : 'flex')};

  ${(props) =>
    props.direction &&
    css`
      flex-direction: ${props.direction};
    `}

  ${(props) =>
    props.gap &&
    css`
      gap: ${cssInvariant(props.gap)};
    `}

  ${(props) =>
    props.ai &&
    css`
      align-items: ${props.ai};
    `}

  ${(props) =>
    props.self &&
    css`
      align-self: ${props.self};
    `}

  ${(props) =>
    props.jc &&
    css`
      justify-content: ${props.jc};
    `}
`;
