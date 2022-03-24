import React from "react";
import styled from "styled-components";
const Footer = () => {
  return (
    <WhiteFlexRowRoot>
      <Text1>Z L O W Y</Text1>
    </WhiteFlexRowRoot>
  );
};
const WhiteFlexRowRoot = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
 // margin: auto;
  min-width: 1297px;
  padding: 44px 79px 23px 64px;
`;
const Text1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  font-size: 40px;
  font-family: Inter;
  font-weight: 600;
  letter-spacing: 8px;
  color: #08c3b8;
  //margin: 47px auto 0px 0px;
`;

export default Footer;