import styled from "styled-components";

interface IButtonProps {
  color?: string;
  background?: string;
}

export const Button = styled.button`
  color: ${(props: IButtonProps) => props.color || "black"};
  background-color: ${(props: IButtonProps) => props.background || "#a2afa2"};
  margin-top: 20px;
  padding: 5px;
  border-radius: 4px;
`;
