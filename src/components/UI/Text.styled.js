import styled, { css } from 'styled-components';
import { UIBox } from './Box.styled';

const lineHeightMap = {
  10: 9,
  12: 12,
  14: 16,
  15: 16,
  16: 20,
  17: 20,
  19: 20,
  21: 24,
  25: 28,
  32: 36,
  48: 52,
  52: 60,
};

export const UIText = styled(UIBox)`
  font-weight: ${(props) => (props.$bold ? 800 : undefined)};
  ${(props) =>
    props.color !== undefined
      ? css`
          color: ${props.color};
        `
      : undefined}
  ${(props) =>
    props.align !== undefined
      ? css`
          text-align: ${props.align};
        `
      : undefined}
  ${(props) =>
    props.size !== undefined
      ? css`
          font-size: ${props.size}px;
          line-height: ${props.lhPx ? `${props.lhPx}px` : `${lineHeightMap[props.size]}px`};
        `
      : undefined}
  ${(props) =>
    props.ws !== undefined
      ? css`
          white-space: ${props.ws};
        `
      : undefined}
  ${(props) =>
    props.wb !== undefined
      ? css`
          word-break: ${props.wb};
        `
      : undefined}
  ${(props) =>
    props.td !== undefined
      ? css`
          text-decoration: ${props.td};
        `
      : undefined}
  ${(props) =>
    props.block &&
    css`
      display: block;
    `}
  ${(props) =>
    props.center &&
    css`
      text-align: center;
    `}
  ${(props) =>
    props.preLine &&
    css`
      white-space: pre-line;
    `}

  // блок у которого указан m и нет block - потенциальная ошибка, если измениться его окружение с флекса на блок
  // поэтому автоматически добавляем block
  ${(props) =>
    (props.m || props.mt || props.mr || props.mb || props.ml) &&
    css`
      display: block;
    `}}
`;
