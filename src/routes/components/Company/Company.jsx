import React from "react";
import styled from "styled-components";
import rightArrow from "./rightArrow.svg";
import company from './company.png';
import { Link } from 'react-router-dom';

const Company = () => {
  return (
      <WhiteFlexRowRoot>
        <Image1 src={company} />
        <FlexColumn>
          <MoreAboutUs>
            <Text1>TRAINING TO THRIVE</Text1>
            <Text2>Is your company prepared for the future?</Text2>
            <Paragraph>
              Transform your organization into a continuously developing one by
              upskilling and efficiently reskilling your employees.
              <br />
              <br />
              Our grads have made a constant excellent impression at Unicorn
              Companies, Fortune 500 Companies, and global startups.
              <br />
              <br />
              We take this opportunity to learn your requirements and then
              recommend specific graduates that will match your company's specific
              needs.
            </Paragraph>
          </MoreAboutUs>
          <ApplyNow>
            <MidnightBlueFlexRow>
              <Button>
                <Text3><Link to="/form" style={{ textDecoration: 'none', color:'white' }}>Hire Now </Link></Text3>
                <Arrowright
                  src={rightArrow}
                />
              </Button>
            </MidnightBlueFlexRow>
          </ApplyNow>
        </FlexColumn>
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
  padding: 66px 62px 66px 75px;
`;
const Image1 = styled.img`
  width: 656px;
  height: 594px;
`;
const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 27px;
  align-items: center;
`;
const MoreAboutUs = styled.div`
  height: 458px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
const Text1 = styled.div`
  width: 206px;
  font-size: 20px;
  font-family: Inter;
  font-weight: 400;
  letter-spacing: 0.6px;
  color: #0b233f;
  margin: 0px 0px 1px 0px;
`;
const Text2 = styled.div`
  width: 600px;
  font-size: 50px;
  font-family: Inter;
  font-weight: 700;
  line-height: 62px;
  color: #0b233f;
  align-self: center;
  margin: 0px 0px 25px 0px;
`;
const Paragraph = styled.div`
  width: 545px;
  font-size: 18px;
  font-family: Inter;
  font-weight: 400;
  line-height: 26px;
  color: #0b233f;
  margin: 0px 0px 0px 4px;
`;
const ApplyNow = styled.div`
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  align-self: flex-start;
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
  cursor:pointer;
  display: flex;
  flex-direction: row;
  gap: 14px;
  justify-content: center;
  align-items: center;
`;
const Text3 = styled.div`
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

export default Company;