import React from "react";
import styled from "styled-components";
import talent1 from './talent1.png';
import talent2 from './talent2.svg';
import talent3 from './talent3.svg';


const Talent = () => {
  return (
    <WhiteFlexColumnRoot>
      <Text1>Talent that matches your needs.</Text1>
      <FlexRow>
        <Image1 src={talent1} />
        <Image2 src={talent2} />
        <Image3 src={talent3} />
      </FlexRow>
      <FlexRow1>
        <Text2>Invest in talent development</Text2>
        <Text3>Recognize skill gaps</Text3>
        <Text4>Tailor made training</Text4>
      </FlexRow1>
      <FlexRow2>
        <Paragraph>
          Transform your organization into one that can promptly adapt to
          changing market demand and promote a culture of continuous
          skill-upgrading.
        </Paragraph>
        <Paragraph1 margin={"0px auto 0px 0px"}>
          Identify the skill gap in your organization. Tap into your team’s
          hidden potential and secure the best talent possible. Save serious
          money in recruiting and training costs.
        </Paragraph1>
        <Paragraph1 margin={"0"}>
          Schools won't make your candidates job-ready. We designed a training
          program aimed at equiping your staff with industry-critical skills,
          specific for your Company's goals and values.
        </Paragraph1>
      </FlexRow2>
    </WhiteFlexColumnRoot>
  );
};
const WhiteFlexColumnRoot = styled.div`
  height: 599px;
  background-color: #f8fdf9;
  display: flex;
  flex-direction: column;
  margin: auto;
  min-width: 1039px;
  padding: 52px 197px 73px 204px;
`;
const Text1 = styled.div`
  font-size: 50px;
  font-family: Inter;
  font-weight: 700;
  line-height: 62px;
  color: #0b233f;
  align-self: center;
  margin: 0px 0px 73px 0px;
`;
const FlexRow = styled.div`
  height: 161px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 0px 36px;
  margin: 0px 0px 57px 0px;
`;
const Image1 = styled.img`
  width: 149px;
  height: 122px;
  margin: 0px 210px 11px 0px;
`;
const Image2 = styled.img`
  width: 177px;
  height: 145px;
  margin: 0px auto 0px 0px;
`;
const Image3 = styled.img`
  width: 131px;
  height: 150px;
  align-self: flex-start;
`;
const FlexRow1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 22px;
  margin: 0px 0px 30px 0px;
`;
const Text2 = styled.div`
  text-align: center;
  width: 176px;
  font-size: 18px;
  font-family: Inter;
  font-weight: 700;
  line-height: 24px;
  text-transform: uppercase;
  color: #4a4f55;
  margin: 0px 235px 0px 0px;
`;
const Text3 = styled.div`
  text-align: center;
  width: 115px;
  font-size: 18px;
  font-family: Inter;
  font-weight: 700;
  line-height: 24px;
  text-transform: uppercase;
  color: #4a4f55;
  margin: 0px auto 0px 0px;
`;
const Text4 = styled.div`
  text-align: center;
  width: 173px;
  font-size: 18px;
  font-family: Inter;
  font-weight: 700;
  line-height: 24px;
  text-transform: uppercase;
  color: #4a4f55;
`;
const FlexRow2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Paragraph = styled.div`
  text-align: center;
  width: 250px;
  height: 168px;
  font-size: 18px;
  font-family: Inter;
  font-weight: 400;
  line-height: 24px;
  color: #757575;
  margin: 0px 118px 0px 0px;
`;
const Paragraph1 = styled.div`
  text-align: center;
  width: 250px;
  font-size: 18px;
  font-family: Inter;
  font-weight: 400;
  line-height: 24px;
  color: #757575;
  margin: ${(props) => props.margin};
`;

export default Talent;
