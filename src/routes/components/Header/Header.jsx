import React from "react";
import styled from "styled-components";
import rightArrow from './rightArrow.svg';
import shapes from './shapes.svg';
import circle from './circle.svg';
import orgCircle from './orgCircle.svg';
import lines from './lines.svg';
import girl from './girl.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <WhiteRectangleRoot>
      <Text1>
        HIRING TO SUCCEED
        <br />
        <br />
      </Text1>
      <Paragraph>
        <br />
        Hire top talent, train your existing teams and make your company
        future-proof
      </Paragraph>
      <Text2>
        Hire Resources <br />
        <Text3>from </Text3>
      </Text2>
      <ApplyNow>
        <MidnightBlueFlexRow>
          
            <Button>
              <Text4><Link to="/form" style={{ textDecoration: 'none', color:'white' }}>Hire Now </Link></Text4>
              <Arrowright
                src={rightArrow} />
            </Button>
        
        </MidnightBlueFlexRow>
      </ApplyNow>
      <Image1 src={shapes} />
      <Img1>
        <Ellipse src={circle} />
        <Ellipse1>
          <Image2 src={orgCircle} />
        </Ellipse1>
        <Img>
          <Image3 src={lines} />
          <Creativitycuate
            src={girl} />
        </Img>
      </Img1>
      <Text5>Z L O W Y</Text5>
    </WhiteRectangleRoot>
  );
}
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
  width: 562px;
  height: 125px;
  font-size: 20px;
  font-family: Inter;
  font-weight: 500;
  letter-spacing: 1px;
  line-height: 25.17px;
  color: #0b233f;
  position: absolute;
  top: 334px;
  left: 92px;
`;
const Text2 = styled.div`
  width: 634px;
  height: 171px;
  font-size: 70px;
  font-family: Inter;
  font-weight: 600;
  line-height: 81.55px;
  color: #0b233f;
  position: absolute;
  top: 195px;
  left: 87px;
`;
const Text3 = styled.div`
  font-size: 60px;
  font-family: Inter;
  font-weight: 600;
  line-height: 69.9px;
  color: #0b233f;
  display: contents;
  white-space: pre-wrap;
`;
const ApplyNow = styled.div`
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  position: absolute;
  top: 495px;
  left: 92px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const MidnightBlueFlexRow = styled.div`
  box-shadow: 0px 0px 30px 0px rgba(65, 135, 123, 0.25);
  width: 197px;
  background-color: #145679;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 0px 18px 0px;
`;
const Button = styled.div`
text-decoration: none;
cursor: pointer;
  color: white;
  display: flex;
  flex-direction: row;
  gap: 14px;
  justify-content: center;
  align-items: center;
`;
const Text4 = styled.div`
  font-size: 18px;
  font-family: Inter;
  font-weight: 600;
  letter-spacing: 1.89px;
  line-height: 18.72px;
  color: #ffffff;
  align-self: flex-end;
  margin: 0px 0px 2px 0px;
  white-space: pre-wrap;
`;
const Arrowright = styled.img`
  width: 24px;
  height: 24px;
`;
const Image1 = styled.img`
  width: 193px;
  height: 69.8px;
  position: absolute;
  top: 573px;
  left: 623px;
`;
const Img1 = styled.div`
  width: 580px;
  height: 600px;
  position: absolute;
  top: 63px;
  left: 769px;
`;
const Ellipse = styled.img`
  width: 529px;
  height: 529px;
  position: absolute;
  top: 28.1px;
  left: 29px;
`;
const Ellipse1 = styled.div`
  background-image: url("https://file.rendit.io/n/pNhxYGr30za38gMPHdkw.svg");
  background-size: cover;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 23.97px 18px 19.03px 25px;
`;
const Image2 = styled.img`
  width: 529px;
  height: 529px;
`;
const Img = styled.div`
  width: 526px;
  height: 584px;
  position: absolute;
  top: 16.24px;
  left: 26px;
`;
const Image3 = styled.img`
  width: 526px;
  height: 520px;
  position: absolute;
  top: 11.86px;
`;
const Creativitycuate = styled.img`
  width: 456px;
  height: 584px;
  position: absolute;
  left: 17px;
`;
const Text5 = styled.div`
margin-top: 10px;
  margin-left: 10px;
  font-size: 52px;
  font-family: Inter;
  font-weight: 600;
  letter-spacing: 7.8px;
  color: #08c3b8;
  position: absolute;
  top: 280px;
  left: 240px;
`;

export default Header;
