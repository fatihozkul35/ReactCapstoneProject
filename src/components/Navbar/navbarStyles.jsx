import styled from "@emotion/styled";

export const navbar = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 30px",
  backgroundColor: "#04D0F5",
  height: "8rem",
  borderBottom: "2px solid #38D0F2",
  fontSize: "2rem",
  boxShadow: "0 0px 25px 8px #38D0F2",
};

export const MenuItemHover = styled.div`
  &:hover {
    color: #04d0f5;
    backgroundcolor: "red";
  }
`;
