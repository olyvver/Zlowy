import React from "react";
import styled from "styled-components";
import rightArrow from "./rightArrow.svg";
import company from './company.png';
import { Link } from 'react-router-dom';

const ISA = () => {
  return (
    <WhiteFlexRowRoot>
      <Image1 src={company} />
      <MoreAboutUs>
        <Text1>SIMPLE LEARNING PLATFORM</Text1>
        <Text2>How ISA works</Text2>
        <Paragraph>
          Income share agreements (ISAs) offer students an alternative to debt.
          <br /> Whereas loans create substantial risks for students if they
          cannot afford payments during and after college, ISA payments adjust
          according to your income.
          <br />
          <br /> In addition, there is a minimum income threshold, so students
          who use the program will not pay if they do not meet a minimum income
          level. <br />
          More answers to frequently asked questions are below.
        </Paragraph>
        <ApplyNow>
          <MidnightBlueRectangle>
            <Text3><Link to="/form" style={{ textDecoration: 'none', color:'white' }}>Find More</Link></Text3>
            <Arrowright
              src={rightArrow}
            />
          </MidnightBlueRectangle>
        </ApplyNow>
      </MoreAboutUs>
    </WhiteFlexRowRoot>
  );
};
const WhiteFlexRowRoot = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  gap: 47px;
  margin: auto;
  min-width: 1303px;
  align-items: center;
  padding: 68px 62px 64px 75px;
`;
const Image1 = styled.img`
  width: 656px;
  height: 594px;
`;
const MoreAboutUs = styled.div`
  height: 498px;
  display: flex;
  align-self: flex-end;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0px 0px 45px 0px;
`;
const Text1 = styled.div`
  width: 308px;
  font-size: 20px;
  font-family: Inter;
  font-weight: 400;
  letter-spacing: 0.6px;
  color: #0b233f;
  margin: 0px 0px 42px 0px;
`;
const Text2 = styled.div`
  width: 371px;
  font-size: 50px;
  font-family: Inter;
  font-weight: 700;
  line-height: 62px;
  color: #0b233f;
  margin: 0px 0px 23px 0px;
`;
const Paragraph = styled.div`
  width: 600px;
  font-size: 18px;
  font-family: Inter;
  font-weight: 400;
  line-height: 26px;
  color: #0b233f;
  align-self: center;
  margin: 0px 0px 57px 0px;
`;
const ApplyNow = styled.div`
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const MidnightBlueRectangle = styled.div`
  box-shadow: 0px 0px 30px 0px rgba(65, 135, 123, 0.25);
  width: 199px;
  height: 56px;
  background-color: #145679;
  position: relative;
`;
const Text3 = styled.div`
  width: 131px;
  height: 18px;
  font-size: 18px;
  font-family: Inter;
  font-weight: 600;
  letter-spacing: 1.89px;
  line-height: 18.72px;
  color: #ffffff;
  position: absolute;
  top: 17px;
  left: 26px;
`;
const Arrowright = styled.img`
  width: 24.3px;
  height: 24px;
  position: absolute;
  top: 14px;
  left: 152px;
`;
export default ISA;