// Modules
import * as React from 'react';
import styled, { css } from 'styled-components';

// Styles
import { dimGrey, dimGreyHover, white } from '../../../styles/colors';
import { nunitoSans } from '../../../styles/fonts';
import { largeFont, mediumFont, normalRadius } from '../../../styles/sizes';

// Interfaces
import { IButtonProps } from './interface';

/**
 * @description The Button atom
 * 
 * @param {string} children The text to be displayed on the button
 * @param {boolean} block Specifies the size of the button
 */
const Button: React.SFC<IButtonProps> = ({ children, block = false }) => {
  const buttonCSS = block ? blockButtonCSS : normalButtonCSS;
  return (
    <StyledButton buttonCSS={buttonCSS}>
      {children}
    </StyledButton>
  );
};


const normalButtonCSS = css`
  width: 152px;
  height: 41px;
  font-size: ${mediumFont};
`;

const blockButtonCSS = css`
  width: 100%;
  height: 75px;
  font-size: ${largeFont};
`;

const StyledButton = styled.button<IButtonProps>`
  background-color: ${dimGrey};
  color: ${white};
  font-family: ${nunitoSans};
  font-style: Regular;
  line-height: 27px;
  border-radius: ${normalRadius};
  cursor: pointer;
  ${({ buttonCSS }) => buttonCSS};

  :hover {
    background-color: ${dimGreyHover};
  }
`;

export default Button;
