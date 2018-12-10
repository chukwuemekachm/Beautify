// Modules
import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Styles
import { dimGrey, dimGreyHover, white } from '../../../styles/colors';
import { nunitoSans } from '../../../styles/fonts';
import { normalFont, normalPadding } from '../../../styles/sizes';

// Interfaces
import { INavLinkProps } from './interface';

/**
 * @description The NavLink atom
 * 
 * @param {string} children The text to be displayed on the link
 * @param {string} to Specifies the size of the button
 */
const NavLink: React.SFC<INavLinkProps> = ({ children, to, ...rest }) =>
  <StyledNavLink to={to} {...rest}>{children}</StyledNavLink>;

const StyledNavLink = styled(Link)`
  font-family: ${nunitoSans};
  font-style: normal;
  font-weight: normal;
  line-height: normal;
  font-size: ${normalFont};
  background-color: ${dimGrey};
  color: ${white};
  text-decoration: none;
  padding: ${normalPadding};

  :hover {
    background-color: ${dimGreyHover};
  }
`;

export default NavLink;
