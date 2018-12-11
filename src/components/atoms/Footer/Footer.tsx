// Modules
import * as React from 'react';
import styled from 'styled-components';

// Styles
import { dimGrey, white } from '../../../styles/colors';
import { nunitoSans } from '../../../styles/fonts';
import { mediumFont } from '../../../styles/sizes';
import remCalc from '../../../utils/remCalc';

/**
 * @description The Footer Molecule
 */
const Footer: React.SFC<{}> = () => (
  <StyledFooter>MADE WITH LOVE BY TEAM BEAUTIFY</StyledFooter>
);

const StyledFooter = styled.h3`
  font-family: ${nunitoSans};
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  font-size: ${mediumFont};
  letter-spacing: ${remCalc(1.6)};
  color: ${white};
  text-align: center;
  background-color: ${dimGrey};
  padding-top: ${remCalc(48)};
  padding-bottom: ${remCalc(48)};
`;

export default Footer;
