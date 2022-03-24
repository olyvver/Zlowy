import React from "react";
import styled from "styled-components";
import rightArrow from "./rightArrow.svg";
import shapes from "./shapes.svg";
import peoples from "./_GetPaidStock 4peoples.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <WhiteRectangleRoot>
      <Text1>
        TRAINING TO SUCCEED
        <br />
        <br />
      </Text1>
      <Paragraph>
        Hone Your Programming Skills , build a career you love and pay back when
        you start earning
      </Paragraph>
      <Text2>Become a Developer</Text2>
      <ApplyNow1>
        <MidnightBlueRectangle>
          <Text3><Link to="/form" style={{ textDecoration: 'none', color:'white' }}>Apply Now </Link></Text3>
          <Arrowright
            src={rightArrow}
          />
        </MidnightBlueRectangle>
      </ApplyNow1>
      <GetPaidStock src={peoples} />
      <Image1 src={shapes} />
    </WhiteRectangleRoot>
  );
};
const WhiteRectangleRoot = styled.div`
  height: 726px;
  background-color: #ffffff;
  position: relative;
  margin: auto;
  min-width: 1440px;
`;
const Text1 = styled.div`
  width: 446px;
  height: 36px;
  font-size: 20px;
  font-family: Inter;
  font-weight: 500;
  letter-spacing: 4.7px;
  color: #0b233f;
  position: absolute;
  top: 145px;
  left: 92px;
`;
const Paragraph = styled.div`
  width: 500px;
  height: 69px;
  font-size: 20px;
  font-family: Inter;
  font-weight: 500;
  letter-spacing: 1px;
  line-height: 25.17px;
  color: #0b233f;
  position: absolute;
  top: 387px;
  left: 92px;
`;
const Text2 = styled.div`
  width: 537px;
  height: 215px;
  font-size: 70px;
  font-family: Inter;
  font-weight: 600;
  line-height: 81.55px;
  color: #0b233f;
  position: absolute;
  top: 195px;
  left: 87px;
`;
const ApplyNow1 = styled.div`
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  position: absolute;
  top: 495px;
  left: 92px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const MidnightBlueRectangle = styled.div`
  box-shadow: 0px 0px 30px 0px rgba(65, 135, 123, 0.25);
  width: 197px;
  height: 56px;
  background-color: #145679;
  position: relative;
`;
const Text3 = styled.div`
  width: 129px;
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
  white-space: pre-wrap;
`;
const Arrowright = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 14px;
  left: 150px;
`;
const GetPaidStock = styled.img`
  width: 895px;
  height: 597px;
  position: absolute;
  top: 33px;
  left: 545px;
`;
const Image1 = styled.img`
  width: 193px;
  height: 69.8px;
  position: absolute;
  top: 573px;
  left: 623px;
`;
export default Hero;