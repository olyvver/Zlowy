import React from "react";
import styled from "styled-components";
import rightArrow from './blueRightArrow.svg';
import { Link } from 'react-router-dom';

const Ready = () => {
  return (
    <FrameRoot>
      <PineGreenFlexColumn>
        <Text1>Ready to hire new talent?</Text1>
        <Paragraph>
          Tell us about your open roles and requirements, and we will source the
          right candidates for you.
        </Paragraph>
        <ApplyNow margin={"0"}>
          <WhiteFlexRow>
            <Button gap={"14px"}>
              <Text2><Link to="/form" style={{ textDecoration: 'none', color:'#145679' }}>Hire Now </Link></Text2>
              <Arrowright
                src={rightArrow}
              />
            </Button>
          </WhiteFlexRow>
        </ApplyNow>
      </PineGreenFlexColumn>
      <NeonCarrotFlexColumn>
        <Text3>Ready to train your talent?</Text3>
        <Paragraph1>
          Tell us about your training needs and we'll create a tailored offering
          with guaranteed outcomes
        </Paragraph1>
        <ApplyNow margin={"0px 209px 0px 0px"}>
          <WhiteFlexRow>
            <Button gap={"12px"}>
              <Text2><Link to="/form" style={{ textDecoration: 'none', color:'#145679' }}>Let’s talk </Link></Text2>
              <Arrowright
                src={rightArrow}
              />
            </Button>
          </WhiteFlexRow>
        </ApplyNow>
      </NeonCarrotFlexColumn>
    </FrameRoot>
  );
};
const FrameRoot = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1px;
  justify-content: center;
  margin: auto;
  width: 1440px;
  align-items: center;
`;
const PineGreenFlexColumn = styled.div`
  height: 282px;
  background-color: #00979e;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 30px 40px 30px 70px;
`;
const Text1 = styled.div`
  text-align: center;
  font-size: 50px;
  font-family: Inter;
  font-weight: 700;
  line-height: 62px;
  color: #ffffff;
  margin: 0px 0px 41px 0px;
`;
const Paragraph = styled.div`
  width: 426px;
  font-size: 18px;
  font-family: Inter;
  font-weight: 600;
  line-height: 26px;
  color: #ffffff;
  margin: 0px 0px 53px 0px;
`;
const NeonCarrotFlexColumn = styled.div`
  height: 282px;
  background-color: #ffa93c;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 29px 40px 29px 36px;
`;
const Text3 = styled.div`
  text-align: center;
  font-size: 50px;
  font-family: Inter;
  font-weight: 700;
  line-height: 62px;
  color: #ffffff;
  align-self: center;
  margin: 0px 0px 35px 0px;
`;
const Paragraph1 = styled.div`
  width: 424px;
  font-size: 18px;
  font-family: Inter;
  font-weight: 600;
  line-height: 26px;
  color: #ffffff;
  margin: 0px 95px 59px 0px;
`;
const ApplyNow = styled.div`
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: ${(props) => props.margin};
`;
const WhiteFlexRow = styled.div`
  box-shadow: 0px 0px 30px 0px rgba(65, 135, 123, 0.25);
  width: 197px;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 0px;
`;
const Button = styled.div`
  cursor:pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: ${(props) => props.gap};
`;
const Text2 = styled.div`
  font-size: 18px;
  font-family: Inter;
  font-weight: 600;
  letter-spacing: 1.89px;
  line-height: 18.72px;
  color: #145679;
  align-self: flex-end;
  margin: 0px 0px 2px 0px;
  white-space: pre-wrap;
`;
const Arrowright = styled.img`
  width: 24px;
  height: 24px;
`;
export default Ready;