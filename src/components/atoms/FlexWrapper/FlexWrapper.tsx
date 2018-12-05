import * as React from 'react';
import styled from 'styled-components';

import { IFlexWrapperProps } from './interface';

/**
 * @description CSS Flex wrapper
 *
 * @param {any} children Any HTML element passed to the flex
 * @param {any} rest The other props
 */
const FlexWrapper: React.SFC<IFlexWrapperProps> = ({
  children,
  width = 'auto',
  flexDirection = 'row',
  flexWrap = 'nowrap',
  justifyContent = 'flex-start',
}) =>
  <StyledFlex
    width={width}
    flexDirection={flexDirection}
    flexWrap={flexWrap}
    justifyContent={justifyContent}
  >
    {children}
  </StyledFlex>;

const StyledFlex = styled.section<IFlexWrapperProps>`
  width: ${({ width }) => width};
  height: auto;
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  justify-content: ${({ justifyContent }) => justifyContent};
`;

export default FlexWrapper;
