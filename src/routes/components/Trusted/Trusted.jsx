import React from "react";
import styled from "styled-components";
import apple from './apple.png';
import TWP from './TWP.png';
import nasa from './nasa.png';
import google from './Google.png';
import slack from './slack.png';
import ATT from './AT&T.png';
import FB from './FB.png';
import spotify from './spotify.png';
import salesForce from './salesForce.png';

const Trusted = () => {
  return (
    <WhiteFlexColumnRoot>
      <Text1>Trusted by</Text1>
      <CompaniesLogos>
        <FlexColumn>
          <Image1 src={TWP} />
          <Image2 src={apple} />
        </FlexColumn>
        <FlexColumn1>
          <FlexRow>
              <Image1 src={FB} />
              <Image1 src={spotify} />
              <Image1 src={salesForce} />
            </FlexRow>
          <FlexRow1>
            <Image1 src={nasa} />
            <Image1 src={google} />
          </FlexRow1>
        </FlexColumn1>
        <FlexColumn2>
          <Image2 src={slack} />
          <Image9 src={ATT} />
        </FlexColumn2>
      </CompaniesLogos>
    </WhiteFlexColumnRoot>
  );
};
const WhiteFlexColumnRoot = styled.div`
  height: 394px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 71px;
  margin: auto;
  min-width: 874px;
  align-items: center;
  padding: 50px 312px 50px 253px;
`;
const Text1 = styled.div`
  text-align: center;
  font-size: 50px;
  font-family: Inter;
  font-weight: 700;
  line-height: 62px;
  color: #0b233f;
  align-self: flex-end;
  margin: 0px 276px 0px 0px;
`;
const CompaniesLogos = styled.div`
  width: 874px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const FlexColumn = styled.div`
  width: 142px;
  display: flex;
  flex-direction: column;
  gap: 52px;
  justify-content: center;
  align-items: flex-start;
  margin: 0px auto 0px 0px;
`;
const FlexColumn1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 52px;
  justify-content: center;
  margin: 0px 38px 0px 0px;
`;
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 70px;
  justify-content: space-between;
  align-items: center;
`;
const FlexRow1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 71px;
`;
const FlexColumn2 = styled.div`
  width: 151px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 56px;
  align-items: flex-start;
`;
const Image9 = styled.img`
  width: 135px;
  height: 72px;
`;
const Image1 = styled.img`
  width: 119px;
  height: 80px;
`;
const Image2 = styled.img`
  width: 119px;
  height: 80px;
  align-self: flex-end;
`;

export default Trusted;