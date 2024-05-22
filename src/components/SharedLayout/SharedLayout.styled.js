import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
  margin: 40px;
`;

export const Button = styled(Link)`
  font-size: 20px;
  border-radius: 20px;
  border: none;
  padding: 10px 20px;
  background-color: #59b17a;

  &:hover {
    background-color: #3f945f;
  }
`;
