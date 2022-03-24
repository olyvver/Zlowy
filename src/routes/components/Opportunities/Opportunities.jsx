import React from "react";
import styled from "styled-components";
import img1 from "./img1.svg";
import img2 from "./img2.svg";
import img3 from "./img3.svg";


const Opportunities = () => {
  return (
    <BlockRoot>
      <Text1>Opportunities that match your talent</Text1>
      <FlexRow>
        <Element1>
          <WhiteFlexColumn padding={"42px 53px 42px 52px"}>
            <Text2>Personalized learning </Text2>
            <Paragraph width={"279px"}>
              From setting targets, to evaluating your progress, we develop a
              study plan that is accomodating your needs, schedule and learning
              style best.
            </Paragraph>
          </WhiteFlexColumn>
          <Image1
            src={img1}
            left={"49px"}
          />
        </Element1>
        <Element1>
          <WhiteFlexColumn padding={"42px 76px 42px 72px"}>
            <Text3>Hands-on experience</Text3>
            <Paragraph width={"236px"}>
              Kick off your new skillset by putting in in practice. Practice as
              you learn, on our{"  "}solo and group{"  "}live projects.
            </Paragraph>
          </WhiteFlexColumn>
          <Image1
            src={img2}
            left={"64px"}
          />
        </Element1>
        <Element1>
          <WhiteFlexColumn padding={"42px 51px 42px 53px"}>
            <Text4>Graduate and be job ready</Text4>
            <Paragraph2>
              We ensure students are equipped with the skills and competencies
              they need to be job ready from day one upon graduation.
            </Paragraph2>
          </WhiteFlexColumn>
          <Image1
            src={img3}
            left={"63px"}
          />
        </Element1>
      </FlexRow>
    </BlockRoot>
  );
};
const BlockRoot = styled.div`
  height: 604px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 73px;
  margin: auto;
  min-width: 1200px;
  align-items: flex-end;
  padding: 54px 118px 54px 122px;
`;
const Text1 = styled.div`
  text-align: center;
  width: 1119px;
  font-size: 50px;
  font-family: Inter;
  font-weight: 700;
  line-height: 62px;
  color: #0b233f;
  margin: 0px 32px 0px 0px;
`;
const FlexRow = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  gap: 21px;
  justify-content: space-between;
`;
const Text2 = styled.div`
  width: 255px;
  font-size: 18px;
  font-family: Inter;
  font-weight: 700;
  line-height: 24px;
  text-transform: uppercase;
  color: #0b233f;
  align-self: flex-end;
  white-space: pre-wrap;
`;
const Text3 = styled.div`
  text-align: center;
  width: 223px;
  font-size: 18px;
  font-family: Inter;
  font-weight: 700;
  line-height: 24px;
  text-transform: uppercase;
  color: #0b233f;
  align-self: flex-end;
  margin: 0px 5px 0px 0px;
`;
const Text4 = styled.div`
  text-align: center;
  width: 280px;
  font-size: 18px;
  font-family: Inter;
  font-weight: 700;
  line-height: 24px;
  text-transform: uppercase;
  color: #0b233f;
`;
const Paragraph2 = styled.div`
  text-align: center;
  width: 270px;
  font-size: 18px;
  font-family: Inter;
  font-weight: 300;
  line-height: 24px;
  color: #0b233f;
  align-self: flex-end;
  margin: 0px 4px 0px 0px;
`;
const Element1 = styled.div`
  width: 386px;
  height: 414px;
  position: relative;
`;
const WhiteFlexColumn = styled.div`
  border-width: 1px;
  border-color: #e2e8f0;
  border-style: solid;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  height: 328px;
  background-color: #ffffff;
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: flex-start;
  gap: 39px;
  align-items: center;
  border-radius: 12px;
  padding: ${(props) => props.padding};
`;
const Paragraph = styled.div`
  text-align: center;
  font-size: 18px;
  font-family: Inter;
  font-weight: 300;
  line-height: 24px;
  color: #0b233f;
  width: ${(props) => props.width};
`;
const Image1 = styled.img`
  width: 322px;
  height: 98px;
  position: absolute;
  top: 316px;
  left: ${(props) => props.left};
`;

export default Opportunities;
