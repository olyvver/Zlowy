import React from "react";
import styled from "styled-components";
import studyGirl from './studyGirl.png';
import girlStudy from './girlStudy.png';
import manStuding from './manStuding.png';
import handsUp from './handsUp.png';
import laptop from './laptop.png';
import faceTime from './faceTime.png';
import telecom from './telecom.png';
import skype from "./skype.png"
import whiteArrow from './whiteArrow.svg';
import { Link } from 'react-router-dom';


const QualityEdu = () => {
  return (
    <WhiteRectangleRoot>
      <FindMore1>
        <MidnightBlueRectangle>
          <Text1><Link to="/form" style={{ textDecoration: 'none', color:'white' }}>Find More</Link></Text1>
          <Arrowright
            src={whiteArrow}
          />
        </MidnightBlueRectangle>
      </FindMore1>
      <FlexRow>
        <ImagePlaceholder1
          src={studyGirl}
        />
        <Element1>
          <ImagePlaceholder
            src={girlStudy}
          />
          <ImagePlaceholder2
            src={manStuding}
          />
          <ImagePlaceholder3
            src={handsUp}
          />
          <ImagePlaceholder4
            src={laptop}
          />
          <ImagePlaceholder5
            src={faceTime}
          />
          <ImagePlaceholder6
            src={telecom}
          />
          <ImagePlaceholder7
            src={skype}
          />
        </Element1>
      </FlexRow>
      <FlexRow1>
        <RobinEggBlueSquare />
        <SilverSquare />
        <OrangeSquare />
        <RobinEggBlueSquare1 />
        <NeonCarrotSquare />
        <RobinEggBlueSquare2 />
        <SilverSquare1 />
        <OrangeSquare1 />
        <RobinEggBlueSquare3 />
        <NeonCarrotSquare1 />
        <BlueGreenSquare />
        <FlexColumn>
          <OrangeSquare2 />
          <SilverSquare2 />
        </FlexColumn>
        <OrangeSquare3 />
        <FlexColumn1>
          <RobinEggBlueSquare4 />
          <RobinEggBlueSquare5 />
        </FlexColumn1>
        <SilverSquare3 />
      </FlexRow1>
      <Texts>
        <Paragraph>Quality Education that doesn’t break the bank</Paragraph>
        <Paragraph1>
          In this program, we support your education and how it positively
          impacts your future career success. To do this, we cover the cost of
          your studies under the expectation that you will pay us back,
          interest-free, after graduation, based on your salary. <br />
          If you don’t make money, we don’t make money. So we are trusting you,
          and our ability to deliver a superior educational and experiential
          product to you.
        </Paragraph1>
      </Texts>
      <Text2>TRAINING TO SUCCEED</Text2>
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
const FindMore1 = styled.div`
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  position: absolute;
  top: 549px;
  left: 105px;
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
const Text1 = styled.div`
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
`;
const Arrowright = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 14px;
  left: 150px;
`;
const FlexRow = styled.div`
  display: flex;
  position: absolute;
  top: 74px;
  left: 721px;
  flex-direction: row;
  gap: 14px;
  justify-content: center;
  align-items: flex-end;
`;
const ImagePlaceholder1 = styled.img`
  width: 119px;
  height: 164px;
  margin: 0px 0px 174.52px 0px;
`;
const Element1 = styled.div`
  align-self: stretch;
  width: 468px;
  height: 536px;
  position: relative;
`;
const ImagePlaceholder = styled.img`
  width: 211px;
  height: 197px;
  position: absolute;
  top: 92.46px;
`;
const ImagePlaceholder2 = styled.img`
  width: 210px;
  height: 164px;
  position: absolute;
  left: 238px;
`;
const ImagePlaceholder3 = styled.img`
  width: 76px;
  height: 105px;
  position: absolute;
  top: 184.35px;
  left: 226px;
`;
const ImagePlaceholder4 = styled.img`
  width: 76px;
  height: 105px;
  position: absolute;
  top: 309.07px;
`;
const ImagePlaceholder5 = styled.img`
  width: 76px;
  height: 105px;
  position: absolute;
  top: 431px;
  left: 392px;
`;
const ImagePlaceholder6 = styled.img`
  width: 152px;
  height: 210px;
  position: absolute;
  top: 204.04px;
  left: 316px;
`;
const ImagePlaceholder7 = styled.img`
  width: 211px;
  height: 197px;
  position: absolute;
  top: 309.07px;
  left: 90px;
`;
const FlexRow1 = styled.div`
  width: 1078px;
  display: flex;
  position: absolute;
  top: 17px;
  left: 241px;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
`;
const RobinEggBlueSquare = styled.div`
  width: 40px;
  height: 40px;
  background-color: #08c3b8;
  margin: 0px 53px 11px 0px;
`;
const SilverSquare = styled.div`
  width: 22px;
  height: 22px;
  background-color: #c4c4c4;
  margin: 0px 56px 64px 0px;
`;
const OrangeSquare = styled.div`
  width: 22px;
  height: 22px;
  background-color: #ff723a;
  margin: 0px 58px 123px 0px;
`;
const RobinEggBlueSquare1 = styled.div`
  width: 40px;
  height: 40px;
  background-color: #08c3b8;
  margin: 0px auto 55px 0px;
`;
const NeonCarrotSquare = styled.div`
  width: 32px;
  height: 32px;
  background-color: #ffa93c;
  margin: 0px 75px 44px 0px;
`;
const RobinEggBlueSquare2 = styled.div`
  width: 40px;
  height: 40px;
  background-color: #08c3b8;
  margin: 0px 17px 0px 0px;
`;
const SilverSquare1 = styled.div`
  width: 22px;
  height: 22px;
  background-color: #c4c4c4;
  margin: 0px 47px 101px 0px;
`;
const OrangeSquare1 = styled.div`
  width: 24px;
  height: 24px;
  background-color: #ff723a;
  margin: 0px 25px 80px 0px;
`;
const RobinEggBlueSquare3 = styled.div`
  width: 40px;
  height: 40px;
  background-color: #08c3b8;
  margin: 0px 43px 11px 0px;
`;
const NeonCarrotSquare1 = styled.div`
  width: 32px;
  height: 32px;
  background-color: #ffa93c;
  align-self: flex-start;
  margin: 87px 0px 0px 0px;
`;
const BlueGreenSquare = styled.div`
  width: 15px;
  height: 15px;
  background-color: #036f89;
  margin: 0px 4px 36px 0px;
`;
const FlexColumn = styled.div`
  align-self: stretch;
  width: 43px;
  display: flex;
  flex-direction: column;
  gap: 356px;
  align-items: flex-start;
  padding: 156px 0px 112px 0px;
  margin: 0px 37px 0px 0px;
`;
const OrangeSquare2 = styled.div`
  width: 24px;
  height: 24px;
  background-color: #ff723a;
`;
const SilverSquare2 = styled.div`
  width: 22px;
  height: 22px;
  background-color: #c4c4c4;
  align-self: flex-end;
`;
const OrangeSquare3 = styled.div`
  width: 22px;
  height: 22px;
  background-color: #ff723a;
  margin: 0px 30px 58px 0px;
`;
const FlexColumn1 = styled.div`
  align-self: stretch;
  width: 69px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 489px;
  align-items: flex-start;
  margin: 0px 31px 0px 0px;
`;
const RobinEggBlueSquare4 = styled.div`
  width: 40px;
  height: 40px;
  background-color: #08c3b8;
  align-self: flex-end;
`;
const RobinEggBlueSquare5 = styled.div`
  width: 40px;
  height: 40px;
  background-color: #08c3b8;
`;
const SilverSquare3 = styled.div`
  width: 22px;
  height: 22px;
  background-color: #c4c4c4;
  margin: 0px 0px 61px 0px;
`;
const Texts = styled.div`
  display: flex;
  position: absolute;
  top: 153px;
  left: 105px;
  flex-direction: column;
  gap: 62.5px;
  justify-content: center;
  align-items: center;
`;
const Paragraph = styled.div`
  width: 696px;
  height: 84.5px;
  font-size: 50px;
  font-family: Inter;
  font-weight: 700;
  line-height: 62px;
  color: #0b233f;
`;
const Paragraph1 = styled.div`
  width: 552px;
  height: 215px;
  font-size: 18px;
  font-family: Poppins;
  font-weight: 400;
  line-height: 26px;
  color: #0b233f;
  align-self: flex-start;
`;
const Text2 = styled.div`
  font-size: 20px;
  font-family: Inter;
  font-weight: 400;
  letter-spacing: 0.6px;
  color: #0b233f;
  position: absolute;
  top: 113px;
  left: 105px;
`;

export default QualityEdu;