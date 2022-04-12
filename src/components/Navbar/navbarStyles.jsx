import styled from "@emotion/styled";

export const navbar = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 30px",
  backgroundColor: "#04D0F5",
  height: "8rem",
  borderBottom: "5px solid black",
  fontSize: "2rem",
};

export const MenuItemHover = styled.div`
  &:hover {
    color: #04d0f5;
    backgroundcolor: "red";
  }
`;
