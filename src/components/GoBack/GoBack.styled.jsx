import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BackLink = styled(Link)`
  display: flex;
  gap: 10px;
  align-items: center;

  :hover {
    color: #ed6179;
  }
`;
