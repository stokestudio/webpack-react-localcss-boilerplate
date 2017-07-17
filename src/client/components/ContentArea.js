import styled from 'styled-components';
import { sizes } from '../globals';

const MARGIN = 45;

const ContentArea = styled.section`
  margin: 0 auto;
  max-width: ${sizes.maxContentWidth + (MARGIN * 2)}px;
  padding: 0 ${MARGIN}px;

  @media (max-width: 850px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;

export default ContentArea;
