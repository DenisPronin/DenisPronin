import styled, { css } from 'styled-components';
import { cssCursorPointer, cssInvariant, cssValueConvert } from '../../helpers/css';

export const UIBox = styled.div`
  // margin
  ${(props) =>
    props.m !== undefined &&
    css`
      margin: ${cssInvariant(props.m)};
    `}
  ${(props) =>
    props.ml !== undefined &&
    (props.theme.isRevert
      ? css`
          margin-right: ${cssValueConvert(props.ml)};
        `
      : css`
          margin-left: ${cssValueConvert(props.ml)};
        `)}
  ${(props) =>
    props.mr !== undefined &&
    (props.theme.isRevert
      ? css`
          margin-left: ${cssValueConvert(props.mr)};
        `
      : css`
          margin-right: ${cssValueConvert(props.mr)};
        `)}
  ${(props) =>
    props.mx !== undefined &&
    css`
      margin-left: ${cssValueConvert(props.mx)};
      margin-right: ${cssValueConvert(props.mx)};
    `}
  ${(props) =>
    props.my !== undefined &&
    css`
      margin-top: ${cssValueConvert(props.my)};
      margin-bottom: ${cssValueConvert(props.my)};
    `}
  ${(props) =>
    props.mt !== undefined &&
    css`
      margin-top: ${cssValueConvert(props.mt)};
    `}
  ${(props) =>
    props.mb !== undefined &&
    css`
      margin-bottom: ${cssValueConvert(props.mb)};
    `}
  // padding
  ${(props) =>
    props.p !== undefined &&
    css`
      padding: ${cssInvariant(props.p)};
    `}
  ${(props) =>
    props.pl !== undefined &&
    (props.theme.isRevert
      ? css`
          padding-right: ${cssValueConvert(props.pl)};
        `
      : css`
          padding-left: ${cssValueConvert(props.pl)};
        `)}
  ${(props) =>
    props.pr !== undefined &&
    (props.theme.isRevert
      ? css`
          padding-left: ${cssValueConvert(props.pr)};
        `
      : css`
          padding-right: ${cssValueConvert(props.pr)};
        `)}
  ${(props) =>
    props.pt !== undefined &&
    css`
      padding-top: ${cssValueConvert(props.pt)};
    `}
  ${(props) =>
    props.pb !== undefined &&
    css`
      padding-bottom: ${cssValueConvert(props.pb)};
    `}
  ${(props) =>
    props.px !== undefined &&
    css`
      padding-left: ${cssValueConvert(props.px)};
      padding-right: ${cssValueConvert(props.px)};
    `}
  ${(props) =>
    props.py !== undefined &&
    css`
      padding-top: ${cssValueConvert(props.py)};
      padding-bottom: ${cssValueConvert(props.py)};
    `}
  // size
  ${(props) =>
    props.w !== undefined &&
    css`
      width: ${cssValueConvert(props.w)};
    `}
  ${(props) =>
    props.h !== undefined &&
    css`
      height: ${cssValueConvert(props.h)};
    `}
  ${(props) =>
    props.mh !== undefined &&
    css`
      min-height: ${cssValueConvert(props.mh)};
    `}
  // misc
  ${(props) =>
    props.fg !== undefined &&
    css`
      flex-grow: ${props.fg};
    `}
  ${(props) =>
    props.fsh !== undefined &&
    css`
      flex-shrink: ${props.fsh};
    `}
  ${(props) => {
    if (props.lhPx !== undefined) {
      return css`
        line-height: ${cssValueConvert(props.lhPx)};
      `;
    }
    if (props.lh !== undefined) {
      return css`
        line-height: ${props.lh};
      `;
    }
    return undefined;
  }}
  ${(props) => props.onClick && cssCursorPointer}
  ${(props) =>
    props.op !== undefined &&
    css`
      opacity: ${props.op};
    `}
  ${(props) =>
    props.ta !== undefined &&
    css`
      text-align: ${props.ta};
    `}
  ${(props) =>
    props.z !== undefined &&
    css`
      z-index: ${props.z};
    `}
  ${(props) =>
    props.relative &&
    css`
      position: relative;
    `}
  // border-radius
  ${(props) =>
    props.br &&
    css`
      border-radius: ${cssInvariant(props.br)};
    `}
  // bg color
  ${(props) =>
    props.bg &&
    css`
      background: ${props.bg};
    `}
  ${(props) =>
    props.overflow &&
    css`
      overflow: ${props.overflow};
    `}
`;
