import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 30px;
  margin: auto;
`;

export const Title = styled.h1`
  font-size: 42px;
  font-weight: 600;
  margin-bottom: 30px;
`;

export const List = styled.ul`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 320px;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #ccc;
`;

export const CardTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: #0e1253;
`;

export const Description = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #3c3c3d;
`;

export const Date = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: #3c3c3d;
`;

export const Organizer = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: #204136;
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: auto;
`;

export const Button = styled(Link)`
  border-radius: 20px;
  border: 1px solid #000;
  padding: 10px 20px;
  background-color: #59b17a;

  &:hover {
    background-color: #3f945f;
  }
`;
