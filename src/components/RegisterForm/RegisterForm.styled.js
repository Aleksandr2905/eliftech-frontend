import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 400px;

  padding: 20px;
`;

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  padding: 8px;
  margin-top: 5px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: dodgerblue;
  }
`;

export const Error = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 2px;
`;

export const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  input[type="radio"] {
    margin-right: 5px;
  }
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #59b17a;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #3f945f;
  }

  &:focus {
    outline: none;
  }
`;
