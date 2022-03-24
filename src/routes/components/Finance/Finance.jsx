import React from "react";
import styled from "styled-components";

const Finance = () => {
  return (
    <FlexColumnRoot>
      <Text1>Financing your future</Text1>
      <Paragraph>
        Financing should never prevent you from starting a fulfilling career.
        Regardless of where you are in your education journey, our financing
        options were <Text2 fontFamily={"Inter"}>designed</Text2>
        <Text2 fontFamily={"Poppins"}> with you in mind. </Text2>
      </Paragraph>
      <FlexRow>
        <WhiteFlexRow padding={"38px 0px 68px 0px"}>
          <Element3>
            <Text4 left={"61px"}>$0</Text4>
            <Text5 left={"0px"}>Upfront Fees</Text5>
          </Element3>
        </WhiteFlexRow>
        <WhiteFlexRow padding={"35px 0px 22px 0px"}>
          <Element4>
            <Text4 left={"60px"}>$30k</Text4>
            <Text5 left={"118px"}>Earn</Text5>
            <Paragraph1>
              No tuition payments until you <br />
              are earning $30,000 or more
            </Paragraph1>
          </Element4>
        </WhiteFlexRow>
        <WhiteFlexRow padding={"35px 0px 22px 0px"}>
          <Element4>
            <Text4 left={"100px"}>5%</Text4>
            <Text5 left={"125px"}>Pay</Text5>
            <Paragraph1>of your salary per month for 24 months</Paragraph1>
          </Element4>
        </WhiteFlexRow>
      </FlexRow>
    </FlexColumnRoot>
  );
};
const FlexColumnRoot = styled.div`
  height: 492px;
  background-image: url("https://file.rendit.io/n/bN1YKoUKvJbbZrS88Kjm.svg");
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: auto;
  min-width: 1238px;
  align-items: center;
  padding: 58px 101px;
`;
const Text1 = styled.div`
  font-size: 50px;
  font-family: Inter;
  font-weight: 700;
  letter-spacing: 1.5px;
  color: #ffffff;
  margin: 0px 0px 26px 0px;
`;
const Paragraph = styled.div`
  text-align: center;
  width: 916px;
  font-size: 20px;
  font-family: Poppins;
  font-weight: 400;
  line-height: 26px;
  color: #ffffff;
  align-self: flex-end;
  margin: 0px 121px 59px 0px;
  white-space: pre-wrap;
`;
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  justify-content: space-between;
  align-items: center;
`;
const Element3 = styled.div`
  width: 223px;
  height: 138px;
  position: relative;
`;
const Text2 = styled.div`
  font-size: 20px;
  font-weight: 400;
  line-height: 26px;
  color: #ffffff;
  display: contents;
  font-family: ${(props) => props.fontFamily};
`;
const WhiteFlexRow = styled.div`
  border-width: 1px;
  border-color: #e2e8f0;
  border-style: solid;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  width: 384px;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  padding: ${(props) => props.padding};
`;
const Text4 = styled.div`
  font-size: 75px;
  font-family: Poppins;
  font-weight: 700;
  letter-spacing: 2.25px;
  color: #00979e;
  position: absolute;
  top: 25px;
  left: ${(props) => props.left};
`;
const Text5 = styled.div`
  text-align: center;
  font-size: 35px;
  font-family: Poppins;
  font-weight: 600;
  line-height: 26px;
  color: #00979e;
  position: absolute;
  left: ${(props) => props.left};
`;
const Element4 = styled.div`
  width: 316px;
  height: 187px;
  position: relative;
`;
const Paragraph1 = styled.div`
  text-align: center;
  width: 316px;
  font-size: 20px;
  font-family: Poppins;
  font-weight: 400;
  line-height: 25px;
  color: #394c63;
  position: absolute;
  top: 137px;
`;
export default Finance;