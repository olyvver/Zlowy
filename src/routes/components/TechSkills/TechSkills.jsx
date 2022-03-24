import React from "react";
import styled from "styled-components";
import studyGirl from './studyGirl.png';
import girlStudy from './girlStudy.png';
import manStuding from './manStuding.png';
import handsUp from './handsUp.png';
import laptop from './laptop.png';
import faceTime from './faceTime.png';
import telecom from './telecom.png';
import whiteArrow from './whiteArrow.svg';
import { Link } from 'react-router-dom';


const TechSkills = () => {
  return (
    <WhiteFlexColumnRoot>
      <RobinEggBlueSquare />
      <Element1>
        <FlexRow>
          <FlexColumn>
            <ImagePlaceholder1
              src={studyGirl}
            />
            <SilverSquare />
          </FlexColumn>
          <Element2>
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
            <ImagePlaceholder5>
              <SilverSquare1 />
            </ImagePlaceholder5>
            <ImagePlaceholder6
              src={faceTime}
            />
            <ImagePlaceholder7
              src={telecom}
            />
            <OrangeSquare />
            <OrangeSquare1 />
            <NeonCarrotSquare />
            <RobinEggBlueSquare1 />
          </Element2>
        </FlexRow>
        <MoreAboutUs>
          <Text1>HIRING FOR GROWTH</Text1>
          <Text2>The technology skills platform</Text2>
          <Paragraph>
            Our curriculum is progressive and tailored to match the individual
            demands of your organization. Thanks to the flexibility of our
            online training, we can reach any employee, anywhere. <br />
            <br />
            If your business is looking to improve the performance of existing
            employees, train employees for a new role, or recruit fresh talent,
            we can help.
          </Paragraph>
          <FlexRow1>
            <FindMore1>
              <Button>
                <Text3><Link to="/form" style={{ textDecoration: 'none', color:'white' }}>Find More</Link></Text3>
                <Arrowright
                  src={whiteArrow}
                />
              </Button>
            </FindMore1>
            <OrangeSquare2 />
          </FlexRow1>
        </MoreAboutUs>
        <RobinEggBlueSquare2 left={"136px"} />
        <RobinEggBlueSquare3 />
        <NeonCarrotSquare1 />
        <RobinEggBlueSquare4 />
        <RobinEggBlueSquare2 left={"826px"} />
        <SilverSquare2 />
        <BlueGreenSquare />
        <SilverSquare3 />
        <OrangeSquare3 />
      </Element1>
    </WhiteFlexColumnRoot>
  );
};
const WhiteFlexColumnRoot = styled.div`
  height: 692px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 17px;
  margin: auto;
  min-width: 1217px;
  align-items: flex-end;
  padding: 17px 118px 17px 105px;
`;
const RobinEggBlueSquare = styled.div`
  width: 40px;
  height: 40px;
  background-color: #08c3b8;
  margin: 0px 56px 0px 0px;
`;
const Element1 = styled.div`
  align-self: stretch;
  height: 613px;
  width: 1217px;
  position: relative;
`;
const FlexRow = styled.div`
  display: flex;
  position: absolute;
  left: 616px;
  flex-direction: row;
  gap: 14px;
  justify-content: center;
`;
const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 128.52px;
  align-items: center;
  padding: 24px 0px;
`;
const ImagePlaceholder1 = styled.img`
  width: 119px;
  height: 164px;
`;
const SilverSquare = styled.div`
  width: 22px;
  height: 22px;
  background-color: #c4c4c4;
  align-self: flex-end;
  margin: 0px 5px 0px 0px;
`;
const Element2 = styled.div`
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
const ImagePlaceholder5 = styled.div`
  width: 117px;
  background-image: url("https://file.rendit.io/n/sbcAflDyuB5IjgDAkjS5.png");
  background-size: cover;
  position: absolute;
  top: 309.07px;
  left: 90px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 169.93px 47px 5.07px 47px;
`;
const SilverSquare1 = styled.div`
  width: 22px;
  height: 22px;
  background-color: #c4c4c4;
`;
const ImagePlaceholder6 = styled.img`
  width: 76px;
  height: 105px;
  position: absolute;
  top: 431px;
  left: 392px;
`;
const ImagePlaceholder7 = styled.img`
  width: 152px;
  height: 210px;
  position: absolute;
  top: 204.04px;
  left: 316px;
`;
const OrangeSquare = styled.div`
  width: 24px;
  height: 24px;
  background-color: #ff723a;
  position: absolute;
  top: 509px;
  left: 28px;
`;
const OrangeSquare1 = styled.div`
  width: 24px;
  height: 24px;
  background-color: #ff723a;
  position: absolute;
  top: 99px;
  left: 211px;
`;
const NeonCarrotSquare = styled.div`
  width: 32px;
  height: 32px;
  background-color: #ffa93c;
  position: absolute;
  top: 30px;
  left: 160px;
`;
const RobinEggBlueSquare1 = styled.div`
  width: 40px;
  height: 40px;
  background-color: #08c3b8;
  position: absolute;
  top: 472px;
  left: 343px;
`;
const MoreAboutUs = styled.div`
  height: 469px;
  display: flex;
  position: absolute;
  top: 30px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const Text1 = styled.div`
  font-size: 20px;
  font-family: Inter;
  font-weight: 400;
  letter-spacing: 0.6px;
  color: #0b233f;
  margin: 0px 0px 13px 0px;
`;
const Text2 = styled.div`
  width: 627px;
  font-size: 50px;
  font-family: Inter;
  font-weight: 700;
  line-height: 62px;
  color: #0b233f;
  align-self: center;
  margin: 0px 0px 13px 0px;
`;
const Paragraph = styled.div`
  width: 553px;
  height: 175px;
  font-size: 18px;
  font-family: Inter;
  font-weight: 400;
  line-height: 26px;
  color: #0b233f;
  margin: 0px 0px 64px 0px;
`;
const FlexRow1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 110px;
  align-items: center;
`;
const FindMore1 = styled.div`
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Button = styled.div`
  cursor:pointer;
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
`;
const Arrowright = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 14px;
  left: 150px;
`;
const OrangeSquare2 = styled.div`
  width: 22px;
  height: 22px;
  background-color: #ff723a;
  align-self: flex-end;
  margin: 0px 0px 9px 0px;
`;
const RobinEggBlueSquare3 = styled.div`
  width: 40px;
  height: 40px;
  background-color: #08c3b8;
  position: absolute;
  top: 518px;
  left: 387px;
`;
const NeonCarrotSquare1 = styled.div`
  width: 32px;
  height: 32px;
  background-color: #ffa93c;
  position: absolute;
  top: 537px;
  left: 544px;
`;
const RobinEggBlueSquare4 = styled.div`
  width: 40px;
  height: 40px;
  background-color: #08c3b8;
  position: absolute;
  top: 573px;
  left: 651px;
`;
const SilverSquare2 = styled.div`
  width: 22px;
  height: 22px;
  background-color: #c4c4c4;
  position: absolute;
  top: 527px;
  left: 229px;
`;
const BlueGreenSquare = styled.div`
  width: 15px;
  height: 15px;
  background-color: #036f89;
  position: absolute;
  top: 562px;
  left: 941px;
`;
const SilverSquare3 = styled.div`
  width: 22px;
  height: 22px;
  background-color: #c4c4c4;
  position: absolute;
  top: 530px;
  left: 1192px;
`;
const OrangeSquare3 = styled.div`
  width: 22px;
  height: 22px;
  background-color: #ff723a;
  position: absolute;
  top: 533px;
  left: 1040px;
`;
const RobinEggBlueSquare2 = styled.div`
  width: 40px;
  height: 40px;
  background-color: #08c3b8;
  position: absolute;
  top: 562px;
  left: ${(props) => props.left};
`;

export default TechSkills;