import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import HamBurgerMenu from './hamburgerMenu.png';

const Navbar = () => {
  return (
      <WhiteFlexRowRoot>
        <Text1>Z L O W Y</Text1>
        <Text2>Z</Text2>
        <Button margin={"0px 194px 6px 0px"}><Link to='/tohire' style={{ textDecoration: 'none', color:'#0B233F' }}>HIRE</Link></Button>
        <Button margin={"0px 0px 6px 0px"}><Link to='/upskill' style={{ textDecoration: 'none', color:'#0B233F' }}>UPSKILL</Link></Button>
      </WhiteFlexRowRoot>
  );
};
const WhiteFlexRowRoot = styled.div`
  background-color: #f8fdf9;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: auto;
  min-width: 1350px;
  align-items: flex-end;
  padding: 36px 63px;
`;
const Text1 = styled.div`
  font-size: 40px;
  font-family: Inter;
  font-weight: 600;
  letter-spacing: 8px;
  color: #08c3b8;
  align-self: center;
  margin: 0px auto 0px 0px;
`;
const Text2 = styled.div`
  visibility: hidden;
`;
const Button = styled.div`
cursor: pointer;
  font-size: 20px;
  font-family: Inter;
  font-weight: 500;
  letter-spacing: 2px;
  color: #0b233f;
  margin: ${(props) => props.margin};
`;


export default Navbar;