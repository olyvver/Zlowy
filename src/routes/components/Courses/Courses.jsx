import React from "react";
import styled from "styled-components";
import leftArrow from "./leftArrowsvg.svg";
import rightArrow from "./rightArrow.svg";
import code from "./code.png";
import taping from "./taping.png";
import webDev from "./webDev.png";
import line from "./line.svg";
import { Link } from 'react-router-dom';

const Courses = () => {
  return (
      <Class>
          <Title>Find the course that is right for you</Title>
          <Main>This program is well-suited for students with all levels of experience,
        from coding newbies to advanced-level programmers. Whatever your level
        of experience, we have a personalized curriculum that will unlock your
        genius.</Main>
      <Flex>
      <ArrowChevrondown
          src={leftArrow}
        />
    <CourseCardRoot>
      <MidnightBlue>
        <Text1>Front-End Web Development</Text1>
        <Image1 src={webDev} />
        <Paragraph>
          Start building responsive websites with HTML, CSS, and JavaScript — a
          versatile skill set with powerful applications in a variety of design,
          marketing, and other tech-adjacent roles.
        </Paragraph>
        <FlexRow>
          <Text2>Part-time Course</Text2>
          <Text2>8 weeks</Text2>
        </FlexRow>
        <FlexRow1>
          <Element2>
            <Text4>$2500</Text4>
            <Line1 src={line} />
          </Element2>
          <Text5>FREE</Text5>
          <FlexRow2>
            <Text6><Link to="/form" style={{ textDecoration: 'none', color:'white' }}>Find More</Link></Text6>
          </FlexRow2>
        </FlexRow1>
      </MidnightBlue>
      <MidnightBlue>
        <Text1>JavaScript Course</Text1>
        <Image1 src={taping} />
        <Paragraph>
        Gain fluency in JavaScript — the world's most popular programming language — and start leveraging its versatile capabilities to build rich, interactive websites and applications.
        </Paragraph>
        <FlexRow>
          <Text2>Part-time Course</Text2>
          <Text2>8 weeks</Text2>
        </FlexRow>
        <FlexRow1>
          <Element2>
            <Text4>$1500</Text4>
            <Line1 src={line} />
          </Element2>
          <Text5>FREE</Text5>
          <FlexRow2>
            <Text6><Link to="/form" style={{ textDecoration: 'none', color:'white' }}>Find More</Link></Text6>
          </FlexRow2>
        </FlexRow1>
      </MidnightBlue>
      <MidnightBlue>
        <Text1>Python Course</Text1>
        <Image1 src={code} />
        <Paragraph>
        Gain fluency in Python — the world's fastest-growing major programming language — and start leveraging its versatile capabilities to build web and data science applications.
        </Paragraph>
        <FlexRow>
          <Text2>Part-time Course</Text2>
          <Text2>8 weeks</Text2>
        </FlexRow>
        <FlexRow1>
          <Element2>
            <Text4>$1500</Text4>
            <Line1 src={line} />
          </Element2>
          <Text5>FREE</Text5>
          <FlexRow2>
            <Text6><Link to="/form" style={{ textDecoration: 'none', color:'white' }}>Find More</Link></Text6>
          </FlexRow2>
        </FlexRow1>
      </MidnightBlue>
    </CourseCardRoot>
    <ArrowChevrondown1
          src={rightArrow}
        />
    </Flex>
    </Class>
  );
};

const Class = styled.div`
    height: 796px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #F8FDF9;
`
const Title = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    line-height: 62px;
    text-align: center;
    color: #0B233F;
`
const Main = styled.div`
margin-top: 40px;
    width: 1025px;
    top: 134px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 33px;
    text-align: center;
    color: #0B233F;
`
const Flex = styled.div`
    display: flex;
    flex-direction: row;
`
const ArrowChevrondown = styled.img`
    position: absolute;
    left: 67.04px;
    margin-top: 300px;
    right: 50px;
    width: 24px;
    height: 24px;
`;
const ArrowChevrondown1 = styled.img`
    position: absolute;
    left: 1330px;
    margin-top: 300px;
    width: 24px;
    height: 24px;
`;
const CourseCardRoot = styled.div`
    top: 292px;
  width: 382px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: auto;
  align-items: center;
`;
const MidnightBlue = styled.div`
margin-top: 80px;
margin-right: 60px;
  width: 350px;
  height:430px;
  background-color: #0b233f;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  padding: 20px 0px 0px 0px;
`;
const Text1 = styled.div`
  width: 326px;
  height: 29px;
  font-size: 20px;
  font-family: Poppins;
  font-weight: 700;
  line-height: 24.92px;
  color: #eeeeee;
`;
const Image1 = styled.img`
  width: 350px;
  height: 180px;
`;
const Paragraph = styled.div`
  width: 300px;
  height: 100px;
  font-size: 15px;
  font-family: Poppins;
  font-weight: 400;
  line-height: 20px;
  color: #eeeeee;
  align-self: left;
`;
const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding-right: 120px;
  margin: 20px 0px 20px 0px;
`;
const FlexRow1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;
const Element2 = styled.div`
  width: 100px;
  height: 38px;
  position: relative;
  margin: 0px 17.3px 0px 0px;
`;
const Text4 = styled.div`
  font-size: 20px;
  font-family: Poppins;
  font-weight: 600;
  line-height: 31.15px;
  color: #ffa93c;
  position: absolute;
  margin-left: 15px;
`;
const Line1 = styled.img`
  width: 65px;
  height: -2px;
  position: absolute;
  margin-left: 15px;
`;
const Text5 = styled.div`
  font-size: 25px;
  font-family: Poppins;
  font-weight: 600;
  line-height: 50px;
  color: #08c3b8;
  align-self: flex-end;
  margin: 0px 20px 1px 0px;
`;
const FlexRow2 = styled.div`
  background-image: url("https://file.rendit.io/n/zOK38i3RY05aTVlg3xot.svg");
  background-size: cover;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 9px 25px 1px 34px;
`;
const Text6 = styled.div`
  text-align: center;
  width: 81px;
  height: 28px;
  font-size: 15px;
  font-family: Poppins;
  font-weight: 400;
  line-height: 18.69px;
  color: #0b233f;
`;
const Text2 = styled.div`
  height: 22px;
  font-size: 12px;
  font-family: Poppins;
  font-weight: 400;
  line-height: 14.02px;
  color: #eeeeee;
  width: ${(props) => props.width};
`;


export default Courses;