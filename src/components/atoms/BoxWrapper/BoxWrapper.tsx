import * as React from 'react';
import styled from 'styled-components';

import { IBoxWrapperProps } from './interface';

/**
 * @description CSS Box wrapper
 *
 * @param {any} children Any HTML element passed to the box
 * @param {any} rest The other props
 */
const BoxWrapper: React.SFC<IBoxWrapperProps> = ({
  children,
  marginLeft = '0rem',
  marginRight = '0rem',
  marginTop = '0rem',
  marginBottom = '0rem',
  paddingLeft = '0rem',
  paddingRight = '0rem',
  paddingTop = '0rem',
  paddingBottom = '0rem',
  width = 'auto',
}) =>
  <StyledBox
    marginLeft={marginLeft}
    marginRight={marginRight}
    marginTop={marginTop}
    marginBottom={marginBottom}
    paddingLeft={paddingLeft}
    paddingRight={paddingRight}
    paddingTop={paddingTop}
    paddingBottom={paddingBottom}
    width={width}
  >
    {children}
  </StyledBox>;

const StyledBox = styled.section<IBoxWrapperProps>`
  width: ${({ width }) => width};
  height: auto;
  margin-left: ${({ marginLeft }) => marginLeft};
  margin-right: ${({ marginRight }) => marginRight};
  margin-top: ${({ marginTop }) => marginTop};
  margin-bottom: ${({ marginBottom }) => marginBottom};
  padding-left: ${({ paddingLeft }) => paddingLeft};
  padding-right: ${({ paddingRight }) => paddingRight};
  padding-top: ${({ paddingTop }) => paddingTop};
  padding-bottom: ${({ paddingBottom }) => paddingBottom};
`;

export default BoxWrapper;
