import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  margin-bottom: 12px;
  color: #fff;
  background-color: black;
  border-bottom: 1px solid black;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justufy-content: center;
  gap: 12px;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  border: 1px solid lightpink;
  font-weight: 500;

  &.active {
    background-color: lightpink;
  }
`;
