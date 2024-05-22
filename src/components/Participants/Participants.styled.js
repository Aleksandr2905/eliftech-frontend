import styled from "styled-components";

export const Wrapper = styled.section`
  padding: 30px;
  margin: auto;
`;

export const Title = styled.h2`
  font-size: 42px;
  font-weight: 600;
  margin-bottom: 30px;
`;

export const SubTitle = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: #3c3c3d;
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
  gap: 30px;
  width: 320px;
  padding: 10px;
  border-radius: 20px;
  border: 1px solid #ccc;
`;

export const Text = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: #3c3c3d;
`;
