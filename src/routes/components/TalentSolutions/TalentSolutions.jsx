import React from "react";
import styled from "styled-components";
import img1 from './img1.svg';
import img2 from './img2.svg';
import img3 from './img3.svg';


const TalentSolutions = () => {
  return (
    <WhiteFlexColumnRoot>
      <Text1>Enterprise Talent Solutions</Text1>
      <FlexRow>
        <Element1>
          <WhiteFlexColumn1 padding={"40px 43px 40px 40px"}>
            <Text2 width={"255px"}>Corporate training</Text2>
            <Paragraph width={"301px"}>
              Your employees are your company’s most important asset.
              <br />
              Transform your company into a continuously learning and developing
              one and upskill and reskill your employees in an efficient way. We
              have flexible solutions no matter what your needs are, corporate
              training held on-site or online.
            </Paragraph>
          </WhiteFlexColumn1>
          <Image1
            src={img1}
            left={"40px"}
          />
        </Element1>
        <Element2>
          <WhiteFlexColumn1 padding={"40px 43px 40px 40px"}>
            <Text2 width={"auto"}>Hire our grads</Text2>
            <Paragraph width={"301px"}>
              Our grads are technically proficient, passionate about their
              craft, and motivated to continue their learning as part of your
              team.
              <br /> Hire a web developer from us and you get someone with
              hands-on training, experience collaborating remotely, and the
              skills to contribute to your team from day one.
            </Paragraph>
          </WhiteFlexColumn1>
          <Image1
            src={img2}
            left={"41px"}
          />
        </Element2>
        <Element3>
          <WhiteFlexColumn1 padding={"40px 42px 40px 40px"}>
            <Text2 width={"217px"}>Skill assesments</Text2>
            <Paragraph width={"302px"}>
              Our skills assessment enables companies to ensure that their job
              candidates, as well as their current employees, have their
              technical skills up-to-date.
              <br />
              Identify any skills gap, find your star performers and craft a
              tailored program that serves your specific talent needs and
              business objectives.
            </Paragraph>
          </WhiteFlexColumn1>
          <Image1
            src={img3}
            left={"40px"}
          />
        </Element3>
      </FlexRow>
    </WhiteFlexColumnRoot>
  );
};
const WhiteFlexColumnRoot = styled.div`
  height: 734px;
  background-color: #f8fdf9;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 60px;
  margin: auto;
  min-width: 1199px;
  align-items: flex-start;
  padding: 53px 118px 53px 123px;
`;
const Text1 = styled.div`
  text-align: center;
  width: 1119px;
  font-size: 50px;
  font-family: Inter;
  font-weight: 700;
  line-height: 62px;
  color: #0b233f;
  margin: 0px 0px 0px 37px;
`;
const FlexRow = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Element1 = styled.div`
  width: 386px;
  height: 570px;
  position: relative;
  margin: 0px 20px 0px 0px;
`;
const Element2 = styled.div`
  width: 386px;
  height: 570px;
  position: relative;
  margin: 0px auto 0px 0px;
`;
const Element3 = styled.div`
  width: 386px;
  height: 570px;
  position: relative;
`;
const WhiteFlexColumn1 = styled.div`
  border-width: 1px;
  border-color: #e2e8f0;
  border-style: solid;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  height: 488px;
  background-color: #ffffff;
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: flex-start;
  gap: 14px;
  align-items: center;
  border-radius: 12px;
  padding: ${(props) => props.padding};
`;
const Text2 = styled.div`
  font-size: 24px;
  font-family: Inter;
  font-weight: 500;
  line-height: 36px;
  color: #145679;
  align-self: flex-start;
  width: ${(props) => props.width};
`;
const Paragraph = styled.div`
  font-size: 18px;
  font-family: Inter;
  font-weight: 300;
  line-height: 30px;
  color: #0b233f;
  width: ${(props) => props.width};
`;
const Image1 = styled.img`
  width: 322px;
  height: 98px;
  position: absolute;
  top: 472px;
  left: ${(props) => props.left};
`;

export default TalentSolutions;